"use client";

import { JSX } from "react";
import Link from "next/link";

import CustomerDetails from "@/components/cart-user-info/CustomerDetails";
import DeliveryDetails from "@/components/cart-user-info/DeliveryDetails";
import PaymentDetails from "@/components/cart-user-info/PaymentDetails";

import { useCartUserInfoContext } from "@/hooks/useCartUserInfoContext";

import { CART_USER_INFO_SECTIONS, NAV_LINKS } from "@/constants/constants";

const cartUserInfoSections: Record<CART_USER_INFO_SECTIONS, () => JSX.Element> =
  {
    [CART_USER_INFO_SECTIONS.CUSTOMER_DETAILS]: CustomerDetails,
    [CART_USER_INFO_SECTIONS.DELIVERY_DETAILS]: DeliveryDetails,
    [CART_USER_INFO_SECTIONS.PAYMENT_DETAILS]: PaymentDetails,
  };

const CartUserInfo = () => {
  const { activeSection } = useCartUserInfoContext();

  const ActiveSectionComponent = cartUserInfoSections[activeSection];

  return (
    <div className="w-full max-w-md px-6">
      <div className="flex justify-center gap-2 bg-gray-50 p-2 text-md mb-5 rounded-md">
        <span className="text-[#666666]">Have an account? </span>
        <Link
          href={NAV_LINKS.LOGIN}
          className="text-black font-medium hover:text-gray-700"
        >
          Log In
        </Link>
      </div>
      <ActiveSectionComponent />
    </div>
  );
};

export default CartUserInfo;
