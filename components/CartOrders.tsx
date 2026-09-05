"use client";

import { useReducer } from "react";

import EditButtons from "./EditButtons";
import CartItems from "./CartItems";

import { CartDispatchContext, CartStateContext } from "@/lib/context";
import { cartReducer } from "@/lib/reducer";

import { defaultCart } from "@/constants/constants";

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
            <EditButtons />
          </div>
          <div className="border border-gray-200"> </div>
          <CartItems />
        </CartDispatchContext>
      </CartStateContext>
    </div>
  );
};

export default CartOrders;
