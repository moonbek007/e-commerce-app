import { useCartUserInfoContext } from "@/hooks/useCartUserInfoContext";
import React, { useState } from "react";

const PaymentDetails = () => {
  const { paymentDetails } = useCartUserInfoContext();
  const [cardDetails, setCardDetails] = useState(paymentDetails);

  const [termsAndConditionsAccepted, setTermsAndConditionsAccepted] =
    useState(false);
  const [isTermsAndConditionsOpen, setIsTermsAndConditionsOpen] =
    useState(false);

  const handleToggleTermsAndConditionsAccepted = () => {
    setTermsAndConditionsAccepted((prev) => !prev);
  };

  const handleToggleIsTermsAndConditionsOpen = () => {
    setIsTermsAndConditionsOpen((prev) => !prev);
  };

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
    console.log(code);
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

  return (
    <div className="w-full max-w-lg flex flex-col gap-5 bg-white py-6 rounded-md">
      <h2 className="text-lg font-medium text-gray-900">Payment Details</h2>

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
      <div>
        <div className="flex gap-1 items-center">
          <label className="flex items-start space-x-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={termsAndConditionsAccepted}
              onChange={handleToggleTermsAndConditionsAccepted}
              className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">
              {"I've read and accepted "}{" "}
            </span>
          </label>
          <button
            onClick={handleToggleIsTermsAndConditionsOpen}
            className="text-gray-900 underline hover:text-blue-600 transition-colors cursor-pointer"
          >
            Terms & Conditions
          </button>
        </div>

        {isTermsAndConditionsOpen && (
          <p className="my-2">
            I confirm that all the information I entered in sections Customer
            Details and Payment Details is not real data. Even if that data
            turns out to be real on purpose or by coincidence, I fully
            understand that the code owner will NOT be responsible for storing
            or processing of that data!
          </p>
        )}

        <button
          type="button"
          disabled={!termsAndConditionsAccepted}
          className="w-full bg-[#1a66ff] hover:bg-blue-700 cursor-pointer text-white mt-8 font-medium py-3 px-4 rounded-md transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-30 disabled:cursor-auto"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
