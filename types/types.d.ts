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
  name: string;
  appliedPromocodes: Promocode[];
  isPromocodeOpen: boolean;
};

declare type Cart = {
  isEditOn: boolean;
  items: CartItem[];
  promocode: {
    name: string;
    appliedPromocodes: Promocode[];
    isPromocodeOpen: boolean;
  };
  pricing: {
    subTotal: number;
    delivery: number;
    total: number;
  };
};

declare type EditModeActionType =
  | {
      type: import("@/constants/constants").CART_ACTION_TYPES.EDIT_ENABLE_EDIT_MODE;
    }
  | {
      type: import("@/constants/constants").CART_ACTION_TYPES.EDIT_SAVE_CHANGES;
    }
  | {
      type: import("@/constants/constants").CART_ACTION_TYPES.EDIT_UNDO_CHANGES;
    };

declare type CartReducerAction =
  // | {
  //     type: string;
  //     payload: Record<string, string>;
  //   } |
  EditModeActionType;
