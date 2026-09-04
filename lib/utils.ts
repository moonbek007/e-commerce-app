import {
  CATEGORIES,
  defaultFilters,
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
