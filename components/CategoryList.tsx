import Image from "next/image";
import Link from "next/link";

import {
  CATALOGUE_FILTERS,
  categories,
  NAV_LINKS,
} from "@/constants/constants";

const CategoryList = async () => {
  return (
    <div className="py-4">
      <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
        Popular Categories
      </h1>
      <div className="px-4 overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4 md:gap-8">
          {categories.map((category) => (
            <Link
              href={`${NAV_LINKS.CATALOGUE}?${CATALOGUE_FILTERS.CATEGORY}=${category.slug}`}
              className="shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 mb-6"
              key={category._id}
            >
              <div className="relative bg-slate-100 w-full h-96">
                <Image
                  src={category.image || "/category.png"}
                  alt=""
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <h1 className="mt-8 font-light text-xl tracking-wide">
                {category.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
