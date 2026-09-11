"use client";

import { useReducer } from "react";
import Link from "next/link";

import CustomerDetails from "@/components/cart-user-info/CustomerDetails";
import DeliveryDetails from "@/components/cart-user-info/DeliveryDetails";
import PaymentDetails from "@/components/cart-user-info/PaymentDetails";

import {
  CartUserInfoContext,
  CartUserInfoDispatchContext,
} from "@/lib/context";
import { cartUserInfoRecuder } from "@/lib/reducer";

import { defaultCartUserInfo, NAV_LINKS } from "@/constants/constants";

const CartUserInfo = () => {
  const [cartUserInfo, dispatch] = useReducer(
    cartUserInfoRecuder,
    defaultCartUserInfo,
  );

  return (
    <div className="w-full max-w-md px-6">
      <CartUserInfoContext value={cartUserInfo}>
        <CartUserInfoDispatchContext value={dispatch}>
          <div className="flex justify-center gap-2 bg-gray-50 p-2 text-md mb-5 rounded-md">
            <span className="text-[#666666]">Have an account? </span>
            <Link
              href={NAV_LINKS.LOGIN}
              className="text-black font-medium hover:text-gray-700"
            >
              Log In
            </Link>
          </div>
          <CustomerDetails />
          <DeliveryDetails />
          <PaymentDetails />
        </CartUserInfoDispatchContext>
      </CartUserInfoContext>
    </div>
  );
};

export default CartUserInfo;
