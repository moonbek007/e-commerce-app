"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const ProductPhotos = ({
  images,
}: {
  images: { id: number; url: string }[];
}) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handleChangeImage = (newImageIndex: number) => {
    if (newImageIndex === mainImageIndex) return;
    setMainImageIndex(newImageIndex);
  };

  return (
    <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
      <div className="h-125 relative">
        <Image
          src={images[mainImageIndex].url}
          alt="Prouct image"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex gap-4 mt-4">
        {images.map((image, i) => (
          <div
            className={clsx(
              "w-1/4 h-32 relative gap-4 mt-8 cursor-pointer rounded-md",
              {
                "ring-3 ring-gray-700": mainImageIndex === i,
              },
            )}
            key={image.id}
            onClick={() => handleChangeImage(i)}
          >
            <Image
              src={image.url}
              alt="Product image"
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPhotos;
