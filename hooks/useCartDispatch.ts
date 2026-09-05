import { useContext } from "react";

import { CartDispatchContext } from "@/lib/context";

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}
