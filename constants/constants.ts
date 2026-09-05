import { calculateBills } from "@/lib/utils";

export enum NAV_LINKS {
  HOME = "/",
  CATALOGUE = "/catalogue",
  ABOUT = "/about",
  CONTACTS = "/contacts",
  LOGIN = "/login",
  PRODUCTS = "/products",
}

export enum CATALOGUE_FILTERS {
  SEARCH = "search",
  CATEGORY = "category",
}

export enum FORM_FIELDS {
  PRODUCT_NAME = "product-name",
}

export const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Up to 30% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Up to 70% off!",
    img: "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

export enum PRODUCT_LIST_TITLES {
  FEATURED = "Featured Products",
  NEW = "New Products",
}

export const products = {
  items: [
    {
      _id: 0,
      image:
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Product 1",
      price: 19.99,
      slug: "product-1",
    },
    {
      _id: 1,
      image:
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Product 2",
      price: 29.99,
      slug: "product-2",
    },
    {
      _id: 2,
      image:
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Product 3",
      price: 9.99,
      slug: "product-3",
    },
    {
      _id: 3,
      image:
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      name: "Product 4",
      price: 39.99,
      slug: "product-4",
    },
  ],
  currentPage: 0,
  hasPrev: () => false,
  hasNext: () => false,
};

export const categories: Category[] = [
  {
    _id: 0,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 1",
    slug: "category-1",
  },
  {
    _id: 1,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 2",
    slug: "category-2",
  },
  {
    _id: 2,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 3",
    slug: "category-3",
  },
  {
    _id: 3,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 4",
    slug: "category-4",
  },
  {
    _id: 4,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 5",
    slug: "category-5",
  },
  {
    _id: 5,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 6",
    slug: "category-6",
  },
  {
    _id: 6,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 7",
    slug: "category-7",
  },
  {
    _id: 7,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 8",
    slug: "category-8",
  },
  {
    _id: 8,
    image:
      "https://images.pexels.com/photos/3262937/pexels-photo-3262937.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Category 9",
    slug: "category-9",
  },
];

export enum PRODUCT_VARIANT_OPTIONS {
  COLOR = "Color",
  SIZE = "Size",
}

export enum PRODUCT_COLOR_OPTIONS {
  RED = "Red",
  BLUE = "Blue",
  GREEN = "Green",
}

export enum PRODUCT_SIZE_OPTIONS {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "2XL",
}

export const defaultCutomizationSelectedOptions = {
  [PRODUCT_VARIANT_OPTIONS.COLOR]: "",
  [PRODUCT_VARIANT_OPTIONS.SIZE]: "",
};

export const productOptions = {
  [PRODUCT_VARIANT_OPTIONS.COLOR]: {
    name: "Color",
    options: [
      {
        name: PRODUCT_COLOR_OPTIONS.RED,
      },
      {
        name: PRODUCT_COLOR_OPTIONS.BLUE,
      },
      {
        name: PRODUCT_COLOR_OPTIONS.GREEN,
      },
    ],
  },
  [PRODUCT_VARIANT_OPTIONS.SIZE]: {
    name: "Size",
    options: [
      {
        name: PRODUCT_SIZE_OPTIONS.S,
      },
      {
        name: PRODUCT_SIZE_OPTIONS.M,
      },
      {
        name: PRODUCT_SIZE_OPTIONS.L,
      },
      {
        name: PRODUCT_SIZE_OPTIONS.XL,
      },
      {
        name: PRODUCT_SIZE_OPTIONS.XXL,
      },
    ],
  },
};

export const defaultProduct = {
  _id: "1",
  name: "Product 1",
  slug: "product-1",
  description: `Elevate your everyday style with this stylish and comfortable product. Crafted from quality fabric, it offers a soft feel, comfortable fit, and an effortlessly elegant look.

Designed for versatility, this shirt is perfect for casual outings, work, gatherings, or everyday wear. Its design adds a modern touch, while the carefully designed style ensures both comfort and a flattering appearance.`,
  rating: 5.0,
  price: {
    price: 10.99,
    discountedPrice: 9.99,
  },
  additionalInfo: [
    {
      title: "Product Information",
      text: "Discover a high-quality product designed to deliver reliable performance, comfort, and value. Please review the product specifications, size, materials, and images before placing your order to ensure it meets your needs.",
    },
    {
      title: "Return & Refund Policy",
      text: "We want you to be completely satisfied with your purchase. If you receive a damaged, defective, or incorrect item, please contact us within the specified return period. Eligible items can be returned according to our return conditions, and approved refunds will be processed to your original payment method.",
    },
    {
      title: "Shipping Information",
      text: "We carefully pack and ship every order to ensure it reaches you safely. Orders are typically processed within the stated processing time, with delivery times varying by location and shipping method. You will receive tracking information once your order has been dispatched.",
    },
  ],
  variants: {
    colors: [],
    sizes: [],
  },
  productOptions: [],
  images: [
    {
      id: 1,
      url: "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/21812160/pexels-photo-21812160/free-photo-of-puerta-colonial-color-rojo-de-guanajuato-mexico.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/20832069/pexels-photo-20832069/free-photo-of-a-narrow-street-with-buildings-and-cars.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
  ],
  reviews: [
    {
      customerName: "John Smith",
      rating: 5,
      text: "The product is amazing! The quality exceeded all my expectations and the design looks so good.",
    },
  ],
};

export enum FILTER_NAMES {
  CATEGORY = "category",
  SORT = "sort",
  MIN_PRICE = "min_price",
  MAX_PRICE = "max_price",
}

export enum CATEGORIES {
  DEFAULT = "Category",
  POPULAR = "Popular",
  FEATURED = "Featured",
  FOR_MEN = "For Men",
  FOR_WOMEN = "For Women",
  FOR_KIDS = "For Kids",
}

export const CATEGORY_DROPDOWN_VALUES: CATEGORIES[] = [
  CATEGORIES.DEFAULT,
  CATEGORIES.POPULAR,
  CATEGORIES.FEATURED,
  CATEGORIES.FOR_MEN,
  CATEGORIES.FOR_WOMEN,
  CATEGORIES.FOR_KIDS,
];

export enum SORTING_OPTIONS {
  DEFAULT = "Sort By",
  NEWEST = "Newest",
  PRICE_ASCENDING = "Price (lowest to highest)",
  PRICE_DESCENDING = "Price (highest to lowest)",
}

export enum SORTING_SEARCH_PARAM_VALUES {
  DEFAULT = "sort by",
  NEWEST = "date,desc",
  PRICE_ASCENDING = "price,asc",
  PRiCE_DESCENDING = "price,desc",
}

export const SORTING_DROPDOWN_VALUES: {
  value: SORTING_OPTIONS;
  searchParamValue: SORTING_SEARCH_PARAM_VALUES;
}[] = [
  {
    value: SORTING_OPTIONS.DEFAULT,
    searchParamValue: SORTING_SEARCH_PARAM_VALUES.DEFAULT,
  },
  {
    value: SORTING_OPTIONS.NEWEST,
    searchParamValue: SORTING_SEARCH_PARAM_VALUES.NEWEST,
  },
  {
    value: SORTING_OPTIONS.PRICE_ASCENDING,
    searchParamValue: SORTING_SEARCH_PARAM_VALUES.PRICE_ASCENDING,
  },
  {
    value: SORTING_OPTIONS.PRICE_DESCENDING,
    searchParamValue: SORTING_SEARCH_PARAM_VALUES.PRiCE_DESCENDING,
  },
];

export const defaultFilters = {
  [FILTER_NAMES.CATEGORY]: CATEGORIES.DEFAULT,
  [FILTER_NAMES.SORT]: SORTING_SEARCH_PARAM_VALUES.DEFAULT,
  [FILTER_NAMES.MIN_PRICE]: null,
  [FILTER_NAMES.MAX_PRICE]: null,
};

export const FILTERS_MAP = Object.entries(defaultFilters).reduce<
  Record<string, Record<CATEGORIES | SORTING_OPTIONS, string> | null>
>((accumulator, [filterName, filterValue]) => {
  if (filterName === FILTER_NAMES.CATEGORY) {
    accumulator[filterName] = CATEGORY_DROPDOWN_VALUES.reduce<
      Record<string, string>
    >((acc, category) => {
      return { ...acc, [category]: category };
    }, {});
    return accumulator;
  }

  if (filterName === FILTER_NAMES.SORT) {
    accumulator[filterName] = SORTING_DROPDOWN_VALUES.reduce<
      Record<string, string>
    >((acc, option) => {
      return { ...acc, [option.searchParamValue]: option.value };
    }, {});
    return accumulator;
  }

  accumulator[filterName] = filterValue as null;
  return accumulator;
}, {});

export enum CATALOGUE_SEARCH_PARAMS {
  PAGE = "page",
  SEARCH = "search",
}

export const defaultPageDetails = {
  currentPage: 1,
  hasPrev: false,
  hasNext: true,
  totalPages: 4,
};

export enum PROMOCODES {
  MINUS_20 = "MINUS20",
}

export const PROMOCODES_MAP = {
  [PROMOCODES.MINUS_20]: {
    name: PROMOCODES.MINUS_20,
    discount: 0.2,
  },
};

export const defaultPromocode: PromocodeInfo = {
  name: PROMOCODES.MINUS_20,
  isPromocodeOpen: false,
};

const cartItems: CartItem[] = [
  {
    id: "1",
    name: "Classic Tote Bag",
    quantity: 2,
    image: "/product.png",
    color: "Red",
    size: "L",
    price: {
      originalPrice: 19.99,
      discountedPrice: 10.99,
    },
  },
  {
    id: "2",
    name: "Classic T-shirt",
    quantity: 1,
    image: "/product.png",
    color: "Green",
    size: "M",
    price: {
      originalPrice: 16.99,
    },
  },
];

const bill = calculateBills(cartItems, []);

export const defaultCart: Cart = {
  isEditOn: false,
  items: cartItems,
  promocode: {
    appliedPromocodes: [],
  },
  pricing: {
    subTotal: bill.subTotal,
    delivery: 0,
    discounts: bill.discounts,
    totalDiscounts: bill.totalDiscounts,
    totalDiscountPercentage: bill.totalDiscountPercentage,
    total: bill.total,
    appliedPromocodeDiscount: {
      percentage: bill.appliedPromocodeDiscount.percentage,
      value: bill.appliedPromocodeDiscount.value,
    },
  },
};

export enum CART_ACTION_TYPES {
  EDIT_ENABLE_EDIT_MODE = "enable edit mode",
  EDIT_SAVE_CHANGES = "save changes",
  EDIT_UNDO_CHANGES = "undo changes",
  ITEM_INCREMENT_QUANTITY = "increment quantity",
  ITEM_DECREMENT_QUANTITY = "decrement quantity",
  ITEM_DELETE_ITEM = "delete item",
  PROMOCODE_APPLY_PROMOCODE = "apply promocode",
}
