import { useContext } from "react";

import { CartUserInfoDispatchContext } from "@/lib/context";

export function useCartUserInfoDispatch() {
  return useContext(CartUserInfoDispatchContext);
}
