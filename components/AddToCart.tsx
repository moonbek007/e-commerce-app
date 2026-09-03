"use client";

import { useState } from "react";
import clsx from "clsx";

const AddToCart = ({ productId }: { productId: string }) => {
  const [quantity, setQuantity] = useState(1);

  const numberOfProductsInStock = 2;
  const isProductOutOfStock = numberOfProductsInStock < 1;

  const handleIncrementQuantity = () => {
    if (quantity < numberOfProductsInStock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    console.log("Add to cart:", productId, quantity);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl disabled:opacity-20"
              onClick={() => handleDecrementQuantity()}
              disabled={isProductOutOfStock || quantity <= 1}
            >
              -
            </button>
            <span className={clsx({ "opacity-20": isProductOutOfStock })}>
              {quantity}
            </span>
            <button
              className="cursor-pointer text-xl disabled:opacity-20"
              onClick={() => handleIncrementQuantity()}
              disabled={
                isProductOutOfStock || quantity === numberOfProductsInStock
              }
            >
              +
            </button>
          </div>
          {isProductOutOfStock ? (
            <div className="text-sm font-medium">Product is out of stock</div>
          ) : numberOfProductsInStock <= 10 ? (
            <div className="text-sm font-medium">
              Only{" "}
              <span className="text-red-400 font-semibold">
                {numberOfProductsInStock} items
              </span>{" "}
              left!
            </div>
          ) : (
            <div className="text-sm font-medium">
              <span className="text-green-500 font-semibold">
                {numberOfProductsInStock} items
              </span>{" "}
              in stock.
            </div>
          )}
        </div>
        <button
          onClick={handleAddToCart}
          disabled={isProductOutOfStock}
          className="w-36 text-sm rounded-3xl cursor-pointer ring-1 ring-[rgb(243,92,122)] text-[rgb(243,92,122)] py-2 px-4 hover:bg-[rgb(243,92,122)] hover:text-white disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
