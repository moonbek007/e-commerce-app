import { useState } from "react";
import clsx from "clsx";

import { useCartUserInfoContext } from "@/hooks/useCartUserInfoContext";
import { useCartUserInfoDispatch } from "@/hooks/useCartUserInfoDispatch";

import {
  CART_USER_INFO_ACTION_TYPES,
  CART_USER_INFO_SECTIONS,
  CUSTOMER_DETAILS_FIELDS,
  customerDetailsFormDataRows,
} from "@/constants/constants";

const CustomerDetails = () => {
  const { customerDetails } = useCartUserInfoContext();
  const dispatch = useCartUserInfoDispatch()!;

  const [formData, setFormData] = useState({ ...customerDetails });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickContinue = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: CART_USER_INFO_ACTION_TYPES.CUSTOMER_DETAILS_SAVE_DETAILS,
      payload: {
        customerDetails: {
          ...formData,
        },
        newSection: CART_USER_INFO_SECTIONS.DELIVERY_DETAILS,
      },
    });
  };

  return (
    <div className="w-full max-w-125 font-sans antialiased text-[#2D2D2D]">
      <h2 className="text-[22px] font-semibold tracking-wide mb-6">
        Customer details
      </h2>

      <form className="space-y-5" onSubmit={handleClickContinue}>
        {customerDetailsFormDataRows.map((row) => {
          const formField = row.items[0];
          return !row.multipleItems ? (
            <div key={formField.label}>
              <label
                htmlFor={formField.label}
                className="block text-xs font-medium text-[#2D2D2D] mb-1.5"
              >
                {formField.isRequired
                  ? `${formField.title} *`
                  : `${formField.title}`}
              </label>
              <input
                type={formField.inputType}
                id={formField.label}
                name={formField.label}
                value={formData[formField.label]}
                onChange={handleChange}
                className={clsx(
                  "w-full h-11 px-3 border border-[#CCCCCC] rounded-sm focus:outline-none focus:border-black transition-colors",
                  {
                    "text-sm":
                      formField.label !== CUSTOMER_DETAILS_FIELDS.FIRST_NAME &&
                      formField.label !== CUSTOMER_DETAILS_FIELDS.LAST_NAME,
                  },
                )}
                required={formField.isRequired}
              />
            </div>
          ) : (
            <div className="flex gap-3" key={formField.label}>
              {row.items.map((field) => {
                return (
                  <div key={field.label}>
                    <label
                      htmlFor={field.label}
                      className="block text-xs font-medium text-[#2D2D2D] mb-1.5"
                    >
                      {`${field.title} ${field.isRequired ? "*" : ""}`}
                    </label>
                    <input
                      type={field.inputType}
                      id={field.label}
                      name={field.label}
                      value={formData[field.label]}
                      onChange={handleChange}
                      className="w-full h-11 px-3 border text-sm border-[#CCCCCC] rounded-sm focus:outline-none focus:border-black transition-colors"
                      required={row.items[0].isRequired}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}

        <div>
          <button
            type="submit"
            className="w-full bg-black text-white text-sm font-medium py-3 rounded hover:bg-gray-900 transition-colors cursor-pointer"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerDetails;
