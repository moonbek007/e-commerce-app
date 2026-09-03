import { StarIcon } from "lucide-react";

import ProductCustomization from "@/components/ProductCustomization";
import QunatityAndAddToCart from "@/components/AddToCart";
import ProductReviews from "@/components/ProductReviews";

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-6">
      <h1 className="text-4xl font-medium">{product.name}</h1>
      <p className="text-gray-500">{product.description}</p>
      <div className="h-0.5 bg-gray-100" />
      {/* Rating and Price */}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-medium">Rating:</span>
          {!product.rating ? (
            <span className="text-lg">-</span>
          ) : (
            <>
              <StarIcon className="w-6 h-6 fill-current text-amber-400" />
              <span className="text-lg font-semibold">5.0</span>
            </>
          )}
        </div>
        <div className="flex gap-3">
          <span className="text-2xl font-medium">Price:</span>
          {product.price?.price === product.price?.discountedPrice ? (
            <span className="font-medium text-2xl">
              ${product.price?.price}
            </span>
          ) : (
            <div className="flex items-center gap-4">
              <h3 className="text-lg text-red-400 line-through">
                ${product.price?.price}
              </h3>
              <h2 className="font-medium text-xl">
                ${product.price?.discountedPrice}
              </h2>
            </div>
          )}
        </div>
      </div>
      <div className="h-0.5 bg-gray-100" />
      <ProductCustomization />
      <QunatityAndAddToCart productId={product._id} />
      <div className="h-0.5 bg-gray-100" />
      {/* Additional Info */}
      {product.additionalInfo.map((section, i) => (
        <div className="flex flex-col gap-4" key={i}>
          <h4 className="font-semibold text-md">{section.title}</h4>
          <p className="font-medium text-sm">{section.text}</p>
        </div>
      ))}
      <div className="h-0.5 bg-gray-100" />
      {/* Product Reviews */}
      <h1 className="text-2xl">User Reviews</h1>
      <ProductReviews reviews={product.reviews} />
    </div>
  );
};

export default ProductInfo;
