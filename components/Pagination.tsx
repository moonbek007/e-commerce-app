"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { CATALOGUE_SEARCH_PARAMS } from "@/constants/constants";

const Pagination = ({ pageDetails }: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleChangePage = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set(CATALOGUE_SEARCH_PARAMS.PAGE, `${pageNumber}`);

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="pt-6 pb-10 flex justify-between w-full">
      <button
        className="rounded-md bg-[rgb(243,92,122)] text-white p-2 text-sm w-24 cursor-pointer disabled:bg-pink-200"
        disabled={!pageDetails.hasPrev}
        onClick={() => handleChangePage(pageDetails.currentPage - 1)}
      >
        Previous
      </button>
      <button
        className="rounded-md bg-[rgb(243,92,122)] text-white p-2 text-sm w-24 cursor-pointer disabled:bg-pink-200"
        disabled={!pageDetails.hasNext}
        onClick={() => handleChangePage(pageDetails.currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
