import { CART_ACTION_TYPES } from "@/constants/constants";

export function cartReducer(state: Cart, action: CartReducerAction): Cart {
  switch (action.type) {
    case CART_ACTION_TYPES.EDIT_ENABLE_EDIT_MODE:
      return { ...state, isEditOn: true };
    case CART_ACTION_TYPES.EDIT_UNDO_CHANGES: // TODO
      return { ...state, isEditOn: false };
    case CART_ACTION_TYPES.EDIT_SAVE_CHANGES: // TODO
      return { ...state, isEditOn: false };
    default:
      break;
  }
  return state;
}
