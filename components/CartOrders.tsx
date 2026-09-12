"use client";

import EditButtons from "./EditButtons";
import CartItems from "./CartItems";
import PromocodeDetails from "./PromocodeDetails";
import CartBillInfo from "./CartBillInfo";

const CartOrders = () => {
  return (
    <div className="w-full max-w-md bg-gray-50 p-6 rounded-sm border border-gray-200 font-sans text-sm text-gray-800">
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-base font-medium text-gray-900">Order Summary</h2>
        <EditButtons />
      </div>
      <div className="border border-gray-200"> </div>
      <CartItems />
      <div className="border border-gray-200"> </div>
      <PromocodeDetails />
      <div className="border border-gray-200"> </div>
      <CartBillInfo />
    </div>
  );
};

export default CartOrders;
