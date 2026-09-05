import { useState } from "react";
import { ListXIcon, PlusIcon, TagIcon, XIcon } from "lucide-react";

import { useCartContext } from "@/hooks/useCartContext";
import { useCartDispatch } from "@/hooks/useCartDispatch";
import {
  CART_ACTION_TYPES,
  defaultPromocode,
  PROMOCODES,
  PROMOCODES_MAP,
} from "@/constants/constants";

const PromocodeDetails = () => {
  const { items, promocode } = useCartContext()!;
  const dispatch = useCartDispatch()!;

  const [promocodeDetails, setPromocodeDetails] = useState({
    name: "",
    isPromocodeOpen: defaultPromocode.isPromocodeOpen,
  });

  const handleTogglePromocode = () => {
    setPromocodeDetails((prev) => {
      return { ...prev, isPromocodeOpen: !prev.isPromocodeOpen };
    });
  };

  const handleChangePromocodeName = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPromocodeDetails((prev) => {
      return { ...prev, name: e.target.value as PROMOCODES };
    });
  };

  const handleClosePromocode = () => {
    setPromocodeDetails(() => {
      return {
        name: "" as PROMOCODES,
        isPromocodeOpen: false,
      };
    });
  };

  const handleApplyPromocode = () => {
    handleClosePromocode();

    const prmCode = PROMOCODES_MAP[promocodeDetails.name as PROMOCODES];
    if (!prmCode) return;

    dispatch({
      type: CART_ACTION_TYPES.PROMOCODE_APPLY_PROMOCODE,
      payload: prmCode,
    });
  };

  const handleDiscardPromocodes = () => {
    dispatch({
      type: CART_ACTION_TYPES.PROMOCODE_DISCARD_PROMOCODES,
    });
  };

  return (
    <div className="flex justify-between py-2.5">
      <div className="flex gap-2">
        {!!promocode.appliedPromocodes.length ? (
          <button
            disabled={!items.length || !promocode.appliedPromocodes.length}
            onClick={handleDiscardPromocodes}
            className="flex items-center py-1 gap-1.5 text-sm text-gray-700 hover:text-black disabled:opacity-30 cursor-pointer"
          >
            <ListXIcon className="w-3.5 h-3.5" />
            Discard promocodes
          </button>
        ) : (
          <button
            disabled={!items.length || !!promocode.appliedPromocodes.length}
            onClick={handleTogglePromocode}
            className="flex items-center py-1 gap-1.5 text-sm underline text-gray-700 hover:text-black disabled:opacity-30 cursor-pointer"
          >
            <TagIcon className="w-3.5 h-3.5" />
            Enter a promo code
          </button>
        )}

        {promocodeDetails.isPromocodeOpen && (
          <input
            type="text"
            value={promocodeDetails.name}
            placeholder="e.g. MINUS20"
            onChange={handleChangePromocodeName}
            className="py-1 px-2 w-32 bg-white ring-1 ring-gray-100 rounded-md text-sm"
          />
        )}
      </div>
      {promocodeDetails.isPromocodeOpen &&
        (!!promocodeDetails.name.length ? (
          <button
            className="rounded-full py-1 px-1  cursor-pointer"
            onClick={handleApplyPromocode}
          >
            <PlusIcon className="w-5 h-5 fill-current text-gray-500" />
          </button>
        ) : (
          <button
            className="rounded-full py-1 px-1  cursor-pointer"
            onClick={handleClosePromocode}
          >
            <XIcon className="w-5 h-5 fill-current text-gray-500" />
          </button>
        ))}
    </div>
  );
};

export default PromocodeDetails;
