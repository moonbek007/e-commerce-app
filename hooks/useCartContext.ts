import { useContext } from "react";
import { CartStateContext } from "@/lib/context";

export function useCartContext() {
  return useContext(CartStateContext);
}
