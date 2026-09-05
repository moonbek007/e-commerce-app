import { createContext, Dispatch } from "react";

export const CartStateContext = createContext<Cart | null>(null);
export const CartDispatchContext =
  createContext<Dispatch<CartReducerAction> | null>(null);
