import { useState } from "react";

import { useCartUserInfoContext } from "@/hooks/useCartUserInfoContext";
import { useCartUserInfoDispatch } from "@/hooks/useCartUserInfoDispatch";
import { useCartDispatch } from "@/hooks/useCartDispatch";

import {
  CART_ACTION_TYPES,
  CART_USER_INFO_ACTION_TYPES,
  CART_USER_INFO_SECTIONS,
  DELIVERY_MAP,
  DELIVERY_TYPES,
} from "@/constants/constants";

const DeliveryDetails = () => {
  const { deliveryDetails, activeSection } = useCartUserInfoContext();
  const cartUserInfoDispatch = useCartUserInfoDispatch()!;
  const cartDispatch = useCartDispatch()!;

  const [checkedDeliveryType, setCheckedDeliveryType] = useState(
    deliveryDetails.type,
  );

  const deliveryTypes = Object.keys(DELIVERY_MAP) as DELIVERY_TYPES[];

  const handleChangeDeliveryType = (newDeliveryType: DELIVERY_TYPES) => {
    setCheckedDeliveryType(newDeliveryType);
    cartDispatch({
      type: CART_ACTION_TYPES.DELIVERY_PICK_DELIVERY_TYPE,
      payload: {
        deliveryType: newDeliveryType,
        deliveryCost: DELIVERY_MAP[newDeliveryType].cost,
      },
    });
  };

  const handleClickContinue = () => {
    cartUserInfoDispatch({
      type: CART_USER_INFO_ACTION_TYPES.DELIVERY_DETAILS_SAVE_DETAILS,
      payload: {
        deliveryDetails: {
          deliveryType: checkedDeliveryType,
          deliveryCost: DELIVERY_MAP[checkedDeliveryType].cost,
        },
        newSection: CART_USER_INFO_SECTIONS.PAYMENT_DETAILS,
      },
    });
  };

  const handleClickEdit = () => {
    cartUserInfoDispatch({
      type: CART_USER_INFO_ACTION_TYPES.SECTIONS_CHANGE_SECTION,
      payload: {
        newSection: CART_USER_INFO_SECTIONS.DELIVERY_DETAILS,
      },
    });
  };

  return (
    <div className="w-full max-w-xl bg-white py-2 font-sans text-gray-900">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-medium">Delivery Details</h2>
        {activeSection !== CART_USER_INFO_SECTIONS.DELIVERY_DETAILS && (
          <button
            className="text-sm cursor-pointer underline"
            onClick={handleClickEdit}
          >
            Edit
          </button>
        )}
      </div>

      {activeSection === CART_USER_INFO_SECTIONS.DELIVERY_DETAILS ? (
        <div className="flex flex-col gap-1 items-center justify-between border border-blue-600 bg-blue-50/50 rounded-md p-4 mb-6">
          {deliveryTypes.map((deliveryType) => {
            return (
              <label
                key={deliveryType}
                className="flex items-center gap-3 cursor-pointer w-full justify-between"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="delivery"
                    checked={checkedDeliveryType === deliveryType}
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    onChange={() => handleChangeDeliveryType(deliveryType)}
                  />
                  <span className="text-sm font-medium text-gray-800">
                    {DELIVERY_MAP[deliveryType].name}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-800">
                  {DELIVERY_MAP[deliveryType].name === DELIVERY_TYPES.FREE
                    ? "Free"
                    : `$${DELIVERY_MAP[deliveryType].cost}`}
                </span>
              </label>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-between text-gray-500">
          <p>{deliveryDetails.type}</p>
          <p>{!deliveryDetails.cost ? "Free" : `$${deliveryDetails.cost}`}</p>
        </div>
      )}

      {activeSection === CART_USER_INFO_SECTIONS.DELIVERY_DETAILS && (
        <button
          type="button"
          className="w-full bg-black text-white hover:bg-gray-800 transition-colors py-3 px-4 rounded font-medium text-sm text-center cursor-pointer"
          onClick={handleClickContinue}
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default DeliveryDetails;
