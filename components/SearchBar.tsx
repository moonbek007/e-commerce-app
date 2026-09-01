"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";

import {
  CATALOGUE_FILTERS,
  FORM_FIELDS,
  NAV_LINKS,
} from "@/constants/constants";

const SearchBar = () => {
  const router = useRouter();

  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  const handleSearch = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const productName = formData.get(FORM_FIELDS.PRODUCT_NAME)?.toString();

    if (productName) {
      router.push(
        `${NAV_LINKS.CATALOGUE}?${CATALOGUE_FILTERS.SEARCH}=${productName}`,
      );
    }
  };

  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name={FORM_FIELDS.PRODUCT_NAME}
        placeholder="Search"
        className="flex-1 bg-transparent outline-none px-1"
        ref={searchRef}
      />
      <button className="cursor-pointer bg-transparent">
        <SearchIcon className="w-4 h-4" />
      </button>
    </form>
  );
};

export default SearchBar;
