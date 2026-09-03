declare type Product = {
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
