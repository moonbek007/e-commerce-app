declare type ProductThumbnail = {
  _id: number;
  image: string;
  name: string;
  price: number;
  slug: string;
};

declare type ProductListProps = {
  title: string;
};

declare type Category = {
  _id: number;
  image: string;
  name: string;
  slug: string;
};

declare type ProductReview = {
  customerName: string;
  rating: number;
  text: string;
};

declare type ProductReviewsProps = {
  reviews: ProductReview[];
};

declare type Product = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  rating: number | null;
  price: {
    price: number;
    discountedPrice: number;
  };
  additionalInfo: {
    title: string;
    text: string;
  }[];
  variants?: Record<string, string[]>;
  productOptions?: string[];
  images: { id: number; url: string }[];
  reviews: ProductReview[];
};

declare type ProductInfoProps = {
  product: Product;
};

declare type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

declare type CataloguePageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

declare type Filters = {
  category: import("@/constants/constants").CATEGORIES;
  sort: import("@/constants/constants").SORTING_SEARCH_PARAM_VALUES;
  min_price: number | null;
  max_price: number | null;
};

declare type PaginationProps = {
  pageDetails: {
    currentPage: number;
    hasPrev: boolean;
    hasNext: boolean;
  };
};

declare type CartItem = {
  id: string;
  name: string;
  quantity: number;
  image: string;
  price: {
    originalPrice: number;
    discountedPrice?: number;
  };
  color: string;
  size: string;
};

declare type Promocode = {
  name: import("@/constants/constants").PROMOCODES;
  discount: number;
};

declare type PromocodeInfo = {
  name: import("@/constants/constants").PROMOCODES;
  isPromocodeOpen: boolean;
};

declare type Cart = {
  isEditOn: boolean;
  items: CartItem[];
  promocode: {
    appliedPromocodes: Promocode[];
  };
  pricing: CartBill;
  editSnapshot: {
    items: CartItem[];
    bill: CartBill;
    promocode: {
      appliedPromocodes: Promocode[];
    };
  } | null;
};

declare type EditModeActionType = {
  type:
    | import("@/constants/constants").CART_ACTION_TYPES.EDIT_ENABLE_EDIT_MODE
    | import("@/constants/constants").CART_ACTION_TYPES.EDIT_SAVE_CHANGES
    | import("@/constants/constants").CART_ACTION_TYPES.EDIT_UNDO_CHANGES;
};

declare type ChangeCartItemDetailsActionType = {
  type:
    | import("@/constants/constants").CART_ACTION_TYPES.ITEM_INCREMENT_QUANTITY
    | import("@/constants/constants").CART_ACTION_TYPES.ITEM_DECREMENT_QUANTITY
    | import("@/constants/constants").CART_ACTION_TYPES.ITEM_DELETE_ITEM;
  payload: { id: string };
};

declare type PickDeliveryTypeActionType = {
  type: import("@/constants/constants").CART_ACTION_TYPES.DELIVERY_PICK_DELIVERY_TYPE;
  payload: {
    deliveryType: import("@/constants/constants").DELIVERY_TYPES;
    deliveryCost: number;
  };
};

declare type PromocodeActionType =
  | {
      type: import("@/constants/constants").CART_ACTION_TYPES.PROMOCODE_APPLY_PROMOCODE;
      payload: Promocode;
    }
  | {
      type: import("@/constants/constants").CART_ACTION_TYPES.PROMOCODE_DISCARD_PROMOCODES;
    };

declare type CartReducerAction =
  | EditModeActionType
  | ChangeCartItemDetailsActionType
  | PromocodeActionType
  | PickDeliveryTypeActionType;

declare type CartBill = {
  subTotal: number;
  total: number;
  extraFees: CartBillExtraFees;
  productPrice: number;
  discounts: number;
  discountsPercentage: number;
  totalDiscounts: number;
  totalDiscountPercentage: number;
  appliedPromocodeDiscount: {
    percentage: number;
    value: number;
  };
};

declare type ExtraFee = {
  name: import("@/constants/constants").CART_BILL_EXTRA_FEES;
  cost: number;
  type?: import("@/constants/constants").DELIVERY_TYPES;
};

declare type CartBillExtraFees = {
  delivery: {
    type: import("@/constants/constants").DELIVERY_TYPES;
    cost: number;
  };
};

declare type CartUserInfo = {
  customerDetails: CustomerDetails;
  deliveryDetails: DeliveryDetails;
  paymentDetails: PaymentDetails;
};

declare type SaveCustomerDetailsAction = {
  type: import("@/constants/constants").CART_USER_INFO_ACTION_TYPES.CUSTOMER_DETAILS_SAVE_DETAILS;
  payload: CustomerDetails;
};

declare type SaveDeliveryDetailsAction = {
  type: import("@/constants/constants").CART_USER_INFO_ACTION_TYPES.DELIVERY_DETAILS_SAVE_DETAILS;
  payload: {
    deliveryType: import("@/constants/constants").DELIVERY_TYPES;
    deliveryCost: number;
  };
};

declare type CartUserInfoReducerAction =
  | SaveCustomerDetailsAction
  | SaveDeliveryDetailsAction;

declare type CustomerDetails = Record<
  import("@/constants/constants").CUSTOMER_DETAILS_FIELDS,
  string
>;

declare type CustomerDetailsFormDataRow = {
  multipleItems: boolean;
  items: {
    title: string;
    label: import("@/constants/constants").CUSTOMER_DETAILS_FIELDS;
    inputType: string;
    isRequired: boolean;
  }[];
};

declare type DeliveryDetails = {
  type: import("@/constants/constants").DELIVERY_TYPES;
  cost: number;
};

declare type PaymentDetails = {
  cardNumber: string;
  expirationDate: string;
  securityCode: string;
  cardHolderName: string;
};
