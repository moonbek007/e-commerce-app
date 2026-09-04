"use client";

import { useState } from "react";
import clsx from "clsx";

import {
  CATEGORY_DROPDOWN_VALUES,
  defaultFilters,
  FILTER_NAMES,
  SORTING_DROPDOWN_VALUES,
} from "@/constants/constants";

const Filters = () => {
  const [filters, setFilters] = useState(defaultFilters);

  const [isError, setIsError] = useState({
    [FILTER_NAMES.MIN_PRICE]: false,
    [FILTER_NAMES.MAX_PRICE]: false,
  });

  const handleChangeFilter = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    if (name !== FILTER_NAMES.MIN_PRICE && name !== FILTER_NAMES.MAX_PRICE) {
      setFilters((prev) => {
        return { ...prev, [name]: value };
      });
      return;
    }

    if (value.length) {
      const price = parseInt(value);
      if (isNaN(price)) {
        setIsError((prev) => {
          return { ...prev, [name]: true };
        });
      }
    } else {
      if (isError[name]) {
        setIsError((prev) => {
          return { ...prev, [name]: false };
        });
        return;
      }
    }
    setFilters((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleClickApplyFilters = () => {
    console.log("Apply Filters");
  };

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <div className="relative">
          <select
            name={FILTER_NAMES.CATEGORY}
            className="py-2 px-4 rounded-2xl text-xs font-medium ring-1 ring-gray-400 bg-[#EBEDED] appearance-none cursor-pointer"
            onChange={handleChangeFilter}
          >
            {CATEGORY_DROPDOWN_VALUES.map((category, index) => {
              return (
                <option
                  value={category}
                  key={index}
                  className="bg-gray-500 text-white hover:bg-green-400"
                >
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <input
          type="text"
          name={FILTER_NAMES.MIN_PRICE}
          placeholder="Min price"
          className={clsx("text-xs rounded-2xl p-2 w-24 ring-1", {
            "ring-gray-400": !isError[FILTER_NAMES.MIN_PRICE],
            "ring-red-400": isError[FILTER_NAMES.MIN_PRICE],
          })}
          onChange={handleChangeFilter}
        />
        <input
          type="text"
          name={FILTER_NAMES.MAX_PRICE}
          placeholder="Max price"
          className={clsx("text-xs rounded-2xl p-2 w-24 ring-1", {
            "ring-gray-400": !isError[FILTER_NAMES.MAX_PRICE],
            "ring-red-400": isError[FILTER_NAMES.MAX_PRICE],
          })}
          onChange={handleChangeFilter}
        />
        <select
          name={FILTER_NAMES.SORT}
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] ring-1 ring-gray-400 appearance-none cursor-pointer"
          onChange={handleChangeFilter}
        >
          {SORTING_DROPDOWN_VALUES.map((option) => {
            return (
              <option
                value={option.searchParamValue}
                key={option.searchParamValue}
                className="bg-gray-500 text-white hover:bg-green-400"
              >
                {option.value}
              </option>
            );
          })}
        </select>
      </div>
      <div className="">
        <button
          onClick={handleClickApplyFilters}
          disabled={
            isError[FILTER_NAMES.MIN_PRICE] || isError[FILTER_NAMES.MAX_PRICE]
          }
          className="py-2 px-4 rounded-2xl ring-1 bg-[rgb(243,92,122)] text-white cursor-pointer disabled:opacity-20"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
