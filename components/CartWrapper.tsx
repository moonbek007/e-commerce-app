"use client";

import { useReducer } from "react";

import {
  CartDispatchContext,
  CartStateContext,
  CartUserInfoContext,
  CartUserInfoDispatchContext,
} from "@/lib/context";
import { cartReducer, cartUserInfoRecuder } from "@/lib/reducer";

import { defaultCart, defaultCartUserInfo } from "@/constants/constants";

const CartWrapper = ({ children }: { children: React.ReactNode }) => {
  const [cart, cartDispatch] = useReducer(cartReducer, defaultCart);

  const [cartUserInfo, cartUserInfoDispatch] = useReducer(
    cartUserInfoRecuder,
    defaultCartUserInfo,
  );

  return (
    <CartStateContext value={cart}>
      <CartDispatchContext value={cartDispatch}>
        <CartUserInfoContext value={cartUserInfo}>
          <CartUserInfoDispatchContext value={cartUserInfoDispatch}>
            {children}
          </CartUserInfoDispatchContext>
        </CartUserInfoContext>
      </CartDispatchContext>
    </CartStateContext>
  );
};

export default CartWrapper;
