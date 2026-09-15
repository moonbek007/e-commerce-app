"use client";

import Link from "next/link";

import CustomerDetails from "@/components/cart-user-info/CustomerDetails";
import DeliveryDetails from "@/components/cart-user-info/DeliveryDetails";
import PaymentDetails from "@/components/cart-user-info/PaymentDetails";
import TermsAndConditions from "@/components/cart-user-info/TermsAndConditions";

import { useCartUserInfoContext } from "@/hooks/useCartUserInfoContext";

import { CART_USER_INFO_SECTIONS, NAV_LINKS } from "@/constants/constants";

const CartUserInfo = () => {
  const { activeSection } = useCartUserInfoContext();

  return (
    <div className="w-full max-w-md px-6 flex flex-col gap-4">
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
      <div className="h-0.5 bg-gray-200"> </div>
      <DeliveryDetails />
      <div className="h-0.5 bg-gray-200"> </div>
      <PaymentDetails />
      {activeSection === CART_USER_INFO_SECTIONS.TERMS_AND_CONDTIONS && (
        <>
          <div className="h-0.5 bg-gray-200"> </div>
          <TermsAndConditions />
        </>
      )}
    </div>
  );
};

export default CartUserInfo;
