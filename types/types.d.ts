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
