import { useCartContext } from "@/hooks/useCartContext";

const CartBillInfo = () => {
  const { pricing, promocode } = useCartContext()!;

  return (
    <>
      <div className="space-y-2 py-4 text-gray-600">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-gray-900">${pricing.subTotal.toFixed(2)}</span>
        </div>
        {!!pricing.total && (
          <div className="flex justify-between">
            <span>Delivery</span>
            <span className="text-gray-900">
              {!pricing.extraFees.delivery
                ? "Free"
                : `$${pricing.extraFees.delivery.cost.toFixed(2)}`}
            </span>
          </div>
        )}
        {!!pricing.productPrice && (
          <div className="flex justify-between">
            <span>Product Price</span>
            <span className="text-gray-900">
              ${pricing.productPrice.toFixed(2)}
            </span>
          </div>
        )}
        {!!pricing.discounts && (
          <div className="flex justify-between">
            <div>
              <span>Price Discounts</span>
            </div>

            <div className="flex items-center gap-1.5">
              {!!pricing.discountsPercentage && (
                <span className="text-xs text-green-600">
                  -{pricing.discountsPercentage.toFixed(2)}%
                </span>
              )}
              <span className="text-gray-900">
                ${pricing.discounts.toFixed(2)}
              </span>
            </div>
          </div>
        )}
        {!!promocode.appliedPromocodes.length && (
          <div className="flex justify-between">
            <div className="flex gap-2">
              <span>Promocodes:</span>
              {promocode.appliedPromocodes.map((prmCode) => {
                return (
                  <span key={prmCode.name} className="text-gray-900">
                    {prmCode.name}
                  </span>
                );
              })}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-green-600 ">
                -{pricing.appliedPromocodeDiscount.percentage.toFixed(2)}%
              </span>
              <span className="text-gray-900">
                ${pricing.appliedPromocodeDiscount.value.toFixed(2)}
              </span>
            </div>
          </div>
        )}
        <div className="flex justify-between">
          <div>
            <span>Total Discounts</span>
          </div>
          <div className="flex items-center gap-2">
            {!!pricing.totalDiscountPercentage && (
              <span className="text-xs text-green-600">
                -{pricing.totalDiscountPercentage.toFixed(2)}%
              </span>
            )}
            <span className="text-gray-900">
              ${pricing.totalDiscounts.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="border border-gray-200"> </div>
      <div className="flex justify-between items-baseline py-3">
        <span className="text-base font-normal text-gray-900">Total</span>
        <span className="text-xl font-medium text-gray-900">
          ${pricing.total.toFixed(2)}
        </span>
      </div>
    </>
  );
};

export default CartBillInfo;
