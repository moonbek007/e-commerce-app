"use client";

import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS, products } from "@/constants/constants";

const ProductList = ({ title }: ProductListProps) => {
  function handleAddToCart(product: ProductThumbnail) {
    console.log(`Adding product ${product.name} to cart`);
  }

  return (
    <div className="py-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-2xl">{title}</h1>
      <div className="mt-6 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {products.items.map((product) => (
          <div
            key={product._id}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          >
            <Link
              href={`${NAV_LINKS.PRODUCTS}/${product.slug}`}
              className="flex flex-col gap-4"
            >
              <div className="relative w-full h-80">
                <Image
                  src={product.image || "/product.png"}
                  alt="Product image"
                  fill
                  sizes="25vw"
                  className="absolute object-cover rounded-md"
                />
              </div>
              <div className="flex justify-between">
                <span className="font-medium">{product.name}</span>
                <span className="font-semibold">${product.price}</span>
              </div>
            </Link>
            <button
              className="rounded-2xl ring-1 ring-[rgb(243,92,122)] text-[rgb(243,92,122)] w-max py-2 px-4 text-xs cursor-pointer hover:bg-[rgb(243,92,122)] hover:text-white"
              onClick={() => {
                handleAddToCart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
