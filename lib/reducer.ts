import {
  calculateBills,
  calculateBillsAfterPromocode,
  getExtraFees,
  updateCartItemsById,
} from "@/lib/utils";

import {
  CART_ACTION_TYPES,
  CART_USER_INFO_ACTION_TYPES,
} from "@/constants/constants";

export function cartReducer(state: Cart, action: CartReducerAction): Cart {
  switch (action.type) {
    case CART_ACTION_TYPES.EDIT_ENABLE_EDIT_MODE:
      return {
        ...state,
        isEditOn: true,
        editSnapshot: {
          bill: state.pricing,
          items: [...state.items],
          promocode: state.promocode,
        },
      };
    case CART_ACTION_TYPES.EDIT_UNDO_CHANGES:
      if (state.editSnapshot) {
        return {
          ...state,
          isEditOn: false,
          items: [...state.editSnapshot.items],
          pricing: { ...state.editSnapshot.bill },
          promocode: { ...state.editSnapshot.promocode },
          editSnapshot: null,
        };
      }
    case CART_ACTION_TYPES.EDIT_SAVE_CHANGES:
      return { ...state, isEditOn: false, editSnapshot: null };
    case CART_ACTION_TYPES.ITEM_INCREMENT_QUANTITY:
      const itemsAfterIncrement = updateCartItemsById(
        action.payload.id,
        state.items,
        CART_ACTION_TYPES.ITEM_INCREMENT_QUANTITY,
      );
      if (!itemsAfterIncrement.success) {
        return state;
      }
      const billAfterIncrement = calculateBills(
        itemsAfterIncrement.items,
        state.promocode.appliedPromocodes,
        getExtraFees(state.pricing.extraFees),
      );
      return {
        ...state,
        items: itemsAfterIncrement.items,
        pricing: billAfterIncrement,
      };
    case CART_ACTION_TYPES.ITEM_DECREMENT_QUANTITY:
      const itemsAfterDecrement = updateCartItemsById(
        action.payload.id,
        state.items,
        CART_ACTION_TYPES.ITEM_DECREMENT_QUANTITY,
      );
      if (!itemsAfterDecrement.success) {
        return state;
      }
      const billAfterDecrement = calculateBills(
        itemsAfterDecrement.items,
        state.promocode.appliedPromocodes,
        getExtraFees(state.pricing.extraFees),
      );
      return {
        ...state,
        items: itemsAfterDecrement.items,
        pricing: billAfterDecrement,
      };
    case CART_ACTION_TYPES.ITEM_DELETE_ITEM:
      const itemsAfterDelete = updateCartItemsById(
        action.payload.id,
        state.items,
        CART_ACTION_TYPES.ITEM_DELETE_ITEM,
      );
      if (!itemsAfterDelete.success) {
        return state;
      }
      const billAfterDelete = calculateBills(
        itemsAfterDelete.items,
        state.promocode.appliedPromocodes,
        getExtraFees(state.pricing.extraFees),
      );
      return {
        ...state,
        items: itemsAfterDelete.items,
        pricing: billAfterDelete,
        promocode: {
          appliedPromocodes: !itemsAfterDelete.items.length
            ? []
            : state.promocode.appliedPromocodes,
        },
      };
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
      const billWithoutPromocdes = calculateBills(
        state.items,
        [],
        getExtraFees(state.pricing.extraFees),
      );
      return {
        ...state,
        promocode: { appliedPromocodes: [] },
        pricing: { ...billWithoutPromocdes },
      };
    case CART_ACTION_TYPES.DELIVERY_PICK_DELIVERY_TYPE:
      const billWithDeliveryApplied = calculateBills(
        state.items,
        state.promocode.appliedPromocodes,
        getExtraFees({
          ...state.pricing.extraFees,
          delivery: {
            type: action.payload.deliveryType,
            cost: action.payload.deliveryCost,
          },
        }),
      );
      return {
        ...state,
        pricing: billWithDeliveryApplied,
      };
    default:
      break;
  }
  return state;
}

export function cartUserInfoRecuder(
  state: CartUserInfo,
  action: CartUserInfoReducerAction,
): CartUserInfo {
  switch (action.type) {
    case CART_USER_INFO_ACTION_TYPES.SECTIONS_CHANGE_SECTION:
      return { ...state, activeSection: action.payload.newSection };
    case CART_USER_INFO_ACTION_TYPES.CUSTOMER_DETAILS_SAVE_DETAILS:
      return {
        ...state,
        customerDetails: action.payload.customerDetails,
        activeSection: action.payload.newSection,
      };
    case CART_USER_INFO_ACTION_TYPES.DELIVERY_DETAILS_SAVE_DETAILS:
      return {
        ...state,
        deliveryDetails: {
          type: action.payload.deliveryDetails.deliveryType,
          cost: action.payload.deliveryDetails.deliveryCost,
        },
        activeSection: action.payload.newSection,
      };
    case CART_USER_INFO_ACTION_TYPES.PAYMENT_DETAILS_SAVE_DETAILS:
      return {
        ...state,
        paymentDetails: action.payload.paymentDetails,
        activeSection: action.payload.newSection,
      };
    default:
      return state;
  }
}
