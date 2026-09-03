import { StarIcon } from "lucide-react";

const Reviews = ({ reviews }: ProductReviewsProps) => {
  return reviews.map((review, i) => (
    <div className="flex flex-col gap-3.5" key={i}>
      <div className="flex items-center gap-4 font-medium">
        <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-green-500">
          {review.customerName[0]}
        </div>
        <span className="font-semibold">{review.customerName}</span>
      </div>
      <div className="flex gap-1.5">
        {Array.from({ length: review.rating }).map((_, index) => (
          <StarIcon
            className="w-4 h-4 fill-current text-amber-300"
            key={index}
          />
        ))}
      </div>
      {review.text && <p>{review.text}</p>}
    </div>
  ));
};

export default Reviews;
