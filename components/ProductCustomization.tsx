"use client";

import { useState } from "react";
import clsx from "clsx";

import {
  defaultCutomizationSelectedOptions,
  PRODUCT_COLOR_OPTIONS,
  PRODUCT_SIZE_OPTIONS,
  PRODUCT_VARIANT_OPTIONS,
  productOptions,
} from "@/constants/constants";

const CustomizeProducts = ({}) => {
  const [selectedOptions, setSelectedOptions] = useState<
    Record<PRODUCT_VARIANT_OPTIONS, string>
  >(defaultCutomizationSelectedOptions);

  const handleSelectOption = (
    optionType: PRODUCT_VARIANT_OPTIONS,
    value: PRODUCT_COLOR_OPTIONS | PRODUCT_SIZE_OPTIONS,
  ) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: value }));
  };

  // Check if the selected variant is in stock
  // const isVariantInStock = (
  //   variantName: PRODUCT_VARIANT_OPTIONS,
  //   value: PRODUCT_COLOR_OPTIONS | PRODUCT_SIZE_OPTIONS,
  // ): boolean => {
  //   return true;
  // };

  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Colors:</h4>
      <ul className="flex items-center gap-3">
        {productOptions[PRODUCT_VARIANT_OPTIONS.COLOR].options.map((option) => {
          const isDisabled = option.name === PRODUCT_COLOR_OPTIONS.GREEN; // isVariantInStock(PRODUCT_VARIANT_OPTIONS.COLOR,option.name)

          const isSelected =
            selectedOptions[PRODUCT_VARIANT_OPTIONS.COLOR] === option.name;

          return (
            <li
              className={clsx(
                "w-8 h-8 rounded-full ring-1 ring-gray-300 relative",
                {
                  "bg-red-500": option.name === PRODUCT_COLOR_OPTIONS.RED,
                  "bg-blue-500": option.name === PRODUCT_COLOR_OPTIONS.BLUE,
                  "bg-green-500": option.name === PRODUCT_COLOR_OPTIONS.GREEN,
                },
              )}
              key={option.name}
            >
              <button
                className="w-full h-full rounded-full cursor-pointer"
                disabled={isDisabled || isSelected}
                onClick={() =>
                  handleSelectOption(PRODUCT_VARIANT_OPTIONS.COLOR, option.name)
                }
              ></button>
              <div
                className={clsx(
                  "absolute w-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer",
                  {
                    "h-10 ring-2 rounded-full": isSelected,
                    "h-0.5 bg-gray-800 rotate-45": isDisabled,
                  },
                )}
              />
            </li>
          );
        })}
      </ul>

      <h4 className="font-medium">Sizes:</h4>
      <ul className="flex items-center gap-3">
        {productOptions[PRODUCT_VARIANT_OPTIONS.SIZE].options.map((option) => {
          const isDisabled =
            option.name === PRODUCT_SIZE_OPTIONS.XXL ||
            option.name === PRODUCT_SIZE_OPTIONS.XL; // isVariantInStock(PRODUCT_VARIANT_OPTIONS.SIZE,option.name)

          const isSelected =
            selectedOptions[PRODUCT_VARIANT_OPTIONS.SIZE] === option.name;

          return (
            <li
              className={clsx(
                "ring-1 ring-[rgb(243,92,122)] text-[rgb(243,92,122)] rounded-md",
                {
                  "bg-[rgb(243,92,122)] text-white shadow": isSelected,
                  "bg-white text-[rgb(243,92,122)]": !isSelected,
                  "opacity-50": isDisabled,
                },
              )}
              key={option.name}
            >
              <button
                className="py-1 px-4 text-sm cursor-pointer"
                disabled={isDisabled || isSelected}
                onClick={() =>
                  handleSelectOption(PRODUCT_VARIANT_OPTIONS.SIZE, option.name)
                }
              >
                {option.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomizeProducts;
