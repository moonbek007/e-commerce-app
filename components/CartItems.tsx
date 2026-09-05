import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { useCartContext } from "@/hooks/useCartContext";
import { useCartDispatch } from "@/hooks/useCartDispatch";

import { CART_ACTION_TYPES, NAV_LINKS } from "@/constants/constants";

const CartItems = () => {
  const { isEditOn, items } = useCartContext()!;
  const dispatch = useCartDispatch()!;

  const handleChangeItemDetails = (action: ChangeCartItemDetailsActionType) => {
    dispatch(action);
  };

  return (
    <div className="space-y-4 py-4">
      {!items.length && (
        <div className="flex flex-col gap-2 justify-center items-center my-8">
          <div className="flex items-center gap-2 text-lg">
            <span>
              <ShoppingCartIcon />
            </span>
            <span>Cart is Empty</span>
          </div>
          {!isEditOn && (
            <div className="flex gap-2 text-md">
              <span>Browse</span>
              <button className="text-blue-800">
                <Link href={NAV_LINKS.CATALOGUE}>Catalogue</Link>
              </button>
            </div>
          )}
        </div>
      )}
      {items.map((item, index) => {
        return (
          <div className="flex gap-4" key={index}>
            <div className="w-16 h-20 bg-green-50 shrink-0 flex items-center justify-center rounded-sm">
              <Image
                src={item.image || "/product.png"}
                alt="item image"
                className="w-full h-full"
                width={16}
                height={16}
              />
            </div>
            <div className="flex-1 flex flex-col gap-1.5">
              <h3 className="font-normal text-gray-900">{item.name}</h3>
              <div
                className={clsx("flex items-center text-xs text-gray-500", {
                  "gap-2": isEditOn,
                  "gap-1": !isEditOn,
                })}
              >
                {!isEditOn ? (
                  <>
                    <span className="py-0.5">Quantity:</span>
                    <span>{item.quantity}</span>
                  </>
                ) : (
                  <>
                    <span>Quantity:</span>
                    <div className="flex gap-3 w-16 justify-between py-0.5 px-1.5 ring-1 ring-gray-200 bg-white rounded-md">
                      <button
                        className="cursor-pointer  disabled:opacity-30"
                        disabled={item.quantity - 1 <= 0}
                        onClick={() =>
                          handleChangeItemDetails({
                            type: CART_ACTION_TYPES.ITEM_DECREMENT_QUANTITY,
                            payload: { id: item.id },
                          })
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="cursor-pointer  disabled:opacity-30"
                        disabled={item.quantity + 1 >= 10} // TODO: get upper limit from API data
                        onClick={() =>
                          handleChangeItemDetails({
                            type: CART_ACTION_TYPES.ITEM_INCREMENT_QUANTITY,
                            payload: { id: item.id },
                          })
                        }
                      >
                        +
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div className="flex gap-2 text-xs text-gray-500">
                <span>Color: {item.color}</span>
                <span>Size: {item.size}</span>
              </div>
              <div></div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-1.5">
                {item.price.discountedPrice ? (
                  <>
                    <span className="line-through text-xs text-gray-400">
                      ${item.price.originalPrice}
                    </span>
                    <span className="font-normal text-gray-900">
                      ${item.price.discountedPrice}
                    </span>
                  </>
                ) : (
                  <span className="font-normal text-gray-900">
                    ${item.price.originalPrice}
                  </span>
                )}
              </div>
              {isEditOn && (
                <div className="flex justify-end">
                  <button
                    className="flex items-center ring-1 bg-red-500 opacity-90 py-1 px-3 rounded-lg text-sm text-white cursor-pointer"
                    onClick={() =>
                      handleChangeItemDetails({
                        type: CART_ACTION_TYPES.ITEM_DELETE_ITEM,
                        payload: { id: item.id },
                      })
                    }
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
