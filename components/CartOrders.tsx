"use client";

import { useReducer } from "react";
import { PencilIcon } from "lucide-react";

import { CartDispatchContext, CartStateContext } from "@/lib/context";

import { defaultCart } from "@/constants/constants";
import { cartReducer } from "@/lib/reducer";

const CartOrders = () => {
  const [cart, dispatch] = useReducer(cartReducer, defaultCart);

  return (
    <div className="w-full max-w-md bg-gray-50 p-6 rounded-sm border border-gray-200 font-sans text-sm text-gray-800">
      <CartStateContext value={cart}>
        <CartDispatchContext value={dispatch}>
          <div className="flex justify-between items-center pb-4">
            <h2 className="text-base font-medium text-gray-900">
              Order Summary
            </h2>
            <button className="flex gap-1 items-center text-xs underline text-gray-600 hover:text-black cursor-pointer p-1.5">
              <span>
                <PencilIcon className="w-3.5 h-3.5" />
              </span>
              <span>Edit Cart</span>
            </button>
          </div>
          <div className="border border-gray-200"> </div>
        </CartDispatchContext>
      </CartStateContext>
    </div>
  );
};

export default CartOrders;
