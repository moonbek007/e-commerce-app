import {
  CART_ACTION_TYPES,
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
