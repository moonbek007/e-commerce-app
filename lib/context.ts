import { createContext, Dispatch } from "react";

import { defaultCartUserInfo } from "@/constants/constants";

export const CartStateContext = createContext<Cart | null>(null);
export const CartDispatchContext =
  createContext<Dispatch<CartReducerAction> | null>(null);

export const CartUserInfoContext =
  createContext<CartUserInfo>(defaultCartUserInfo);
export const CartUserInfoDispatchContext =
  createContext<Dispatch<CartUserInfoReducerAction> | null>(null);
