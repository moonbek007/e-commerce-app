"use client";

import { useReducer } from "react";

import {
  CartUserInfoContext,
  CartUserInfoDispatchContext,
} from "@/lib/context";
import { cartUserInfoRecuder } from "@/lib/reducer";

import { defaultCartUserInfo } from "@/constants/constants";

const CartUserInfo = () => {
  const [cartUserInfo, dispatch] = useReducer(
    cartUserInfoRecuder,
    defaultCartUserInfo,
  );

  return (
    <div className="w-full max-w-md p-6">
      <CartUserInfoContext value={cartUserInfo}>
        <CartUserInfoDispatchContext value={dispatch}>
          Cart User Info
        </CartUserInfoDispatchContext>
      </CartUserInfoContext>
    </div>
  );
};

export default CartUserInfo;
