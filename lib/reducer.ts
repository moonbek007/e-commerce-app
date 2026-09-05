import {
  calculateBills,
  calculateBillsAfterPromocode,
  updateCartItemsById,
} from "@/lib/utils";

import { CART_ACTION_TYPES, CART_BILL_EXTRA_FEES } from "@/constants/constants";

export function cartReducer(state: Cart, action: CartReducerAction): Cart {
  switch (action.type) {
    case CART_ACTION_TYPES.EDIT_ENABLE_EDIT_MODE:
      return { ...state, isEditOn: true };
    case CART_ACTION_TYPES.EDIT_UNDO_CHANGES: // TODO
      return { ...state, isEditOn: false };
    case CART_ACTION_TYPES.EDIT_SAVE_CHANGES: // TODO
      return { ...state, isEditOn: false };
    case CART_ACTION_TYPES.ITEM_INCREMENT_QUANTITY:
      const itemsAfterIncrement = updateCartItemsById(
        action.payload.id,
        state.items,
        CART_ACTION_TYPES.ITEM_INCREMENT_QUANTITY,
      );
      if (!itemsAfterIncrement.success) {
        return state;
      }
      return { ...state, items: itemsAfterIncrement.items };
    case CART_ACTION_TYPES.ITEM_DECREMENT_QUANTITY:
      const itemsAfterDecrement = updateCartItemsById(
        action.payload.id,
        state.items,
        CART_ACTION_TYPES.ITEM_DECREMENT_QUANTITY,
      );
      if (!itemsAfterDecrement.success) {
        return state;
      }
      return { ...state, items: itemsAfterDecrement.items };
    case CART_ACTION_TYPES.ITEM_DELETE_ITEM:
      const itemsAfterDelete = updateCartItemsById(
        action.payload.id,
        state.items,
        CART_ACTION_TYPES.ITEM_DELETE_ITEM,
      );
      if (!itemsAfterDelete.success) {
        return state;
      }
      return { ...state, items: itemsAfterDelete.items };
    case CART_ACTION_TYPES.PROMOCODE_APPLY_PROMOCODE:
      const prmCode = action.payload;
      if (
        state.promocode.appliedPromocodes.find(
          (promocode) => promocode.name === prmCode.name,
        )
      )
        return state;
      const bill = calculateBillsAfterPromocode(
        state.pricing,
        prmCode.discount,
      );
      return {
        ...state,
        promocode: {
          ...state.promocode,
          appliedPromocodes: [...state.promocode.appliedPromocodes, prmCode],
        },
        pricing: { ...bill },
      };
    case CART_ACTION_TYPES.PROMOCODE_DISCARD_PROMOCODES:
      const extraFees: { name: string; value: number }[] = [];
      if (state.pricing.delivery > 0) {
        extraFees.push({
          name: CART_BILL_EXTRA_FEES.DELIVERY,
          value: state.pricing.delivery,
        });
      }
      const billWithoutPromocdes = calculateBills(state.items, [], extraFees);
      return {
        ...state,
        promocode: { appliedPromocodes: [] },
        pricing: { ...billWithoutPromocdes },
      };
    default:
      break;
  }
  return state;
}
