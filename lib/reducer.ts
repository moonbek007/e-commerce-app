import { updateCartItemsById } from "@/lib/utils";

import { CART_ACTION_TYPES } from "@/constants/constants";

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
    default:
      break;
  }
  return state;
}
