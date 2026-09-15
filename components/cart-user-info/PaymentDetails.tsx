import { useState } from "react";

import { useCartUserInfoContext } from "@/hooks/useCartUserInfoContext";
import { useCartUserInfoDispatch } from "@/hooks/useCartUserInfoDispatch";

import {
  CART_USER_INFO_ACTION_TYPES,
  CART_USER_INFO_SECTIONS,
} from "@/constants/constants";
import clsx from "clsx";

const PaymentDetails = () => {
  const { paymentDetails, activeSection } = useCartUserInfoContext();
  const dispatch = useCartUserInfoDispatch()!;

  const [cardDetails, setCardDetails] = useState(paymentDetails);

  const handleChangeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isDeleting =
      (e.nativeEvent as InputEvent).inputType === "deleteContentBackward";

    if (isDeleting) {
      setCardDetails((prev) => {
        return {
          ...prev,
          cardNumber: e.target.value
            .substring(0, e.target.value.length)
            .trimEnd(),
        };
      });
      return;
    }

    let newCardNumber = e.target.value.replace(/\D/g, "");
    if (newCardNumber.length > 16) return;

    const matches = newCardNumber.match(/\d{1,4}/g);
    if (matches) {
      newCardNumber = matches.join(" ");
    }

    setCardDetails((prev) => {
      return { ...prev, cardNumber: newCardNumber };
    });
  };

  const handleChangeExpirationDate = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const isDeleting =
      (e.nativeEvent as InputEvent).inputType === "deleteContentBackward";
    if (isDeleting) {
      if (cardDetails.expirationDate.endsWith("/")) {
        setCardDetails((prev) => {
          return {
            ...prev,
            expirationDate: cardDetails.expirationDate.substring(0, 2),
          };
        });
      } else {
        setCardDetails((prev) => {
          return {
            ...prev,
            expirationDate: e.target.value,
          };
        });
      }
      return;
    }

    if (e.target.value.length > 5) return;

    let newExpirationDate = e.target.value.replace(/\D/g, "");
    if (newExpirationDate.length == 2) {
      const month = parseInt(newExpirationDate);
      if (month > 12) {
        newExpirationDate = "12";
      }
      newExpirationDate += "/";
      setCardDetails((prev) => {
        return { ...prev, expirationDate: newExpirationDate };
      });
      return;
    }

    if (newExpirationDate.length > 2) {
      newExpirationDate =
        newExpirationDate.substring(0, 2) +
        "/" +
        newExpirationDate.substring(2, 4);
    }
    setCardDetails((prev) => {
      return { ...prev, expirationDate: newExpirationDate };
    });
  };

  const handleChangeSecurityCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value.replace(/\D/g, "");
    setCardDetails((prev) => {
      return { ...prev, securityCode: code };
    });
  };

  const handleChangeCardHolderName = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCardDetails((prev) => {
      return { ...prev, cardHolderName: e.target.value };
    });
  };

  const handleClickEdit = () => {
    dispatch({
      type: CART_USER_INFO_ACTION_TYPES.SECTIONS_CHANGE_SECTION,
      payload: {
        newSection: CART_USER_INFO_SECTIONS.PAYMENT_DETAILS,
      },
    });
  };

  const handleClickContinue = () => {
    dispatch({
      type: CART_USER_INFO_ACTION_TYPES.PAYMENT_DETAILS_SAVE_DETAILS,
      payload: {
        paymentDetails: cardDetails,
        newSection: CART_USER_INFO_SECTIONS.TERMS_AND_CONDTIONS,
      },
    });
  };

  return (
    <div
      className={clsx(
        "w-full max-w-lg flex flex-col bg-white py-2 rounded-md",
        {
          "gap-4": activeSection === CART_USER_INFO_SECTIONS.PAYMENT_DETAILS,
        },
      )}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-medium text-gray-900">Payment Details</h2>
        {activeSection !== CART_USER_INFO_SECTIONS.PAYMENT_DETAILS && (
          <button
            className="text-sm cursor-pointer underline"
            onClick={handleClickEdit}
          >
            Edit
          </button>
        )}
      </div>

      {activeSection === CART_USER_INFO_SECTIONS.PAYMENT_DETAILS ? (
        <>
          <div className="bg-[#f9f9f9] p-5 rounded-sm border border-gray-100 space-y-4">
            <div>
              <label
                htmlFor="card-number"
                className="block text-xs font-normal text-gray-600 mb-1"
              >
                Card number <span className="text-gray-400">*</span>
              </label>
              <input
                type="text"
                id="card-number"
                placeholder="Enter card number"
                value={cardDetails.cardNumber}
                onChange={handleChangeCardNumber}
                className="w-full bg-white border border-gray-200 rounded-sm px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="exp-date"
                  className="block text-xs font-normal text-gray-600 mb-1"
                >
                  Expiration date <span className="text-gray-400">*</span>
                </label>
                <input
                  type="text"
                  id="exp-date"
                  placeholder="MM/YY"
                  maxLength={5}
                  value={cardDetails.expirationDate}
                  onChange={handleChangeExpirationDate}
                  className="w-full bg-white border border-gray-200 rounded-sm px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor="cvv"
                    className="block text-xs font-normal text-gray-600"
                  >
                    Security code (CVV) <span className="text-gray-400">*</span>
                  </label>
                  <span className="text-gray-400 text-xs cursor-pointer select-none">
                    <svg
                      className="w-3.5 h-3.5 inline-block"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </div>
                <input
                  type="password"
                  id="cvv"
                  placeholder="XXXX"
                  value={cardDetails.securityCode}
                  onChange={handleChangeSecurityCode}
                  maxLength={4}
                  className="w-full bg-white border border-gray-200 rounded-sm px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="cardholder-name"
                className="block text-xs font-normal text-gray-600 mb-1"
              >
                Card Holder name <span className="text-gray-400">*</span>
              </label>
              <input
                type="text"
                id="card-holder-name"
                value={cardDetails.cardHolderName}
                placeholder="Enter Card Holder's Name"
                onChange={handleChangeCardHolderName}
                className="w-full bg-white border border-gray-200 rounded-sm px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-gray-400"
              />
            </div>
          </div>
          <div className="text-sm text-gray-600 leading-relaxed">
            <p className="text-center text-red-500">
              DO NOT ENTER REAL CARD DETAILS!
            </p>
          </div>
          <button
            type="button"
            className="w-full bg-black text-white hover:bg-gray-800 transition-colors py-3 px-4 rounded font-medium text-sm text-center cursor-pointer"
            onClick={handleClickContinue}
          >
            Continue
          </button>
        </>
      ) : (
        <div>
          <p>{paymentDetails.cardNumber}</p>
          <p>{paymentDetails.cardHolderName}</p>
        </div>
      )}
    </div>
  );
};

export default PaymentDetails;
