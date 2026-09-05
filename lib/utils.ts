import {
  CART_ACTION_TYPES,
  CART_BILL_EXTRA_FEES,
  CATALOGUE_SEARCH_PARAMS,
  CATEGORIES,
  defaultFilters,
  defaultPageDetails,
  FILTER_NAMES,
  FILTERS_MAP,
  SORTING_SEARCH_PARAM_VALUES,
} from "@/constants/constants";

export function loadFiltersParams(params: URLSearchParams) {
  const filters: Filters = { ...defaultFilters };
  params.entries().forEach(([paramName, paramValue]) => {
    if (!FILTERS_MAP[paramName]) {
      const price = parseInt(paramValue);
      if (!isNaN(price)) {
        filters[paramName as FILTER_NAMES.MIN_PRICE] = price;
      }
      return;
    }

    if (paramName === FILTER_NAMES.SORT) {
      filters[paramName] = paramValue as SORTING_SEARCH_PARAM_VALUES;
      return;
    }
    // @ts-expect-error No error here
    filters[paramName] = FILTERS_MAP[paramName][paramValue];
  });
  return filters;
}

export function generateFiltersParams(
  filters: Record<
    FILTER_NAMES,
    CATEGORIES | SORTING_SEARCH_PARAM_VALUES | number | null
  >,
) {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([filterName, filterValue]) => {
    if (!filterValue) return;
    if (
      filterName === FILTER_NAMES.CATEGORY &&
      filterValue === CATEGORIES.DEFAULT
    )
      return;

    if (
      filterName === FILTER_NAMES.SORT &&
      filterValue === SORTING_SEARCH_PARAM_VALUES.DEFAULT
    )
      return;

    params.set(filterName, `${filterValue}`);
  });
  return params;
}

export function loadPaginationDetails(params: {
  [key: string]: string | string[] | undefined;
}) {
  const pageDetails = { ...defaultPageDetails };
  const currentPage = params[CATALOGUE_SEARCH_PARAMS.PAGE] as string;
  if (currentPage) {
    pageDetails.currentPage = parseInt(currentPage);

    // TODO: temporary value before API data
    if (pageDetails.currentPage < pageDetails.totalPages) {
      pageDetails.hasNext = true;
    }

    // TODO: implement hasPrev + hasNext based on API data
    if (pageDetails.currentPage > 1) {
      pageDetails.hasPrev = true;
    }
  }

  return { ...pageDetails };
}

export function updateCartItemsById(
  itemId: string,
  items: CartItem[],
  actionType:
    | CART_ACTION_TYPES.ITEM_INCREMENT_QUANTITY
    | CART_ACTION_TYPES.ITEM_DECREMENT_QUANTITY
    | CART_ACTION_TYPES.ITEM_DELETE_ITEM,
): { items: CartItem[]; success: boolean } {
  const itemToEditIndex = items.findIndex((item) => item.id === itemId);
  let success = false;
  if (itemToEditIndex === -1) {
    return { items, success: false };
  }

  const newItems = [...items];
  if (actionType === CART_ACTION_TYPES.ITEM_INCREMENT_QUANTITY) {
    const newItem = { ...newItems[itemToEditIndex] };
    newItem.quantity += 1;
    newItems[itemToEditIndex] = newItem;
    success = true;
    return { items: newItems, success };
  }

  if (actionType === CART_ACTION_TYPES.ITEM_DECREMENT_QUANTITY) {
    const newItem = { ...newItems[itemToEditIndex] };
    newItem.quantity -= 1;
    newItems[itemToEditIndex] = newItem;
    success = true;
    return { items: newItems, success };
  }

  if (actionType === CART_ACTION_TYPES.ITEM_DELETE_ITEM) {
    newItems.splice(itemToEditIndex, 1);
    success = true;
    return { items: newItems, success };
  }
  return { items, success };
}

export function calculateBills(
  items: CartItem[],
  promocodes?: Promocode[],
  otherFees?: { name: string; value: number }[],
) {
  const bill = items.reduce<CartBill>(
    (acc, item) => {
      acc.subTotal += item.price.originalPrice;

      if (item.price.discountedPrice) {
        acc.total += item.price.discountedPrice;
        const difference =
          item.price.originalPrice - item.price.discountedPrice;
        acc.discounts += difference;
        acc.totalDiscounts += difference;
        return acc;
      }

      acc.total += item.price.originalPrice;
      return acc;
    },
    {
      subTotal: 0,
      total: 0,
      delivery: 0,
      discounts: 0,
      totalDiscounts: 0,
      totalDiscountPercentage: 0,
      appliedPromocodeDiscount: {
        percentage: 0,
        value: 0,
      },
    },
  );

  // If there are other fees to apply: e.g. Delivery
  otherFees?.forEach((fee) => {
    if (fee.name === CART_BILL_EXTRA_FEES.DELIVERY) {
      bill.delivery = fee.value;
    }
    bill.subTotal += fee.value;
    bill.total += fee.value;
  });

  // IF promocodes have been applied
  if (promocodes) {
    const promocodeDiscountPercentage =
      calculatePromocodeDiscountPercentage(promocodes);
    const promocodeDiscount = promocodes.length
      ? bill.subTotal / promocodeDiscountPercentage
      : 0;
    bill.appliedPromocodeDiscount.percentage = promocodeDiscountPercentage;
    bill.appliedPromocodeDiscount.value = promocodeDiscount;
    bill.total -= promocodeDiscount;
    bill.totalDiscounts += promocodeDiscount;
  }

  bill.totalDiscountPercentage = (bill.totalDiscounts * 100) / bill.subTotal;
  return bill;
}

export function calculatePromocodeDiscountPercentage(
  appliedPromocodes: Promocode[],
) {
  return (
    appliedPromocodes.reduce<number>((sum, prmCode) => {
      sum += prmCode.discount;
      return sum;
    }, 0) * 100
  );
}

export function calculateBillsAfterPromocode(bill: CartBill, discount: number) {
  const newBill = { ...bill };
  const discountPercentage = discount * 100;
  const promocodeDiscount =
    ((newBill.subTotal - newBill.discounts) * discountPercentage) / 100;
  newBill.appliedPromocodeDiscount.percentage = discountPercentage;
  newBill.appliedPromocodeDiscount.value = promocodeDiscount;
  newBill.total -= promocodeDiscount;
  newBill.totalDiscounts += promocodeDiscount;
  newBill.totalDiscountPercentage =
    (newBill.totalDiscounts * 100) / newBill.subTotal;
  return newBill;
}
