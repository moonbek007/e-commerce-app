import { useContext } from "react";

import { CartUserInfoContext } from "@/lib/context";

export function useCartUserInfoContext() {
  return useContext(CartUserInfoContext);
}
