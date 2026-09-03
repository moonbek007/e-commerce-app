import { notFound } from "next/navigation";

import ProductPhotos from "@/components/ProductPhotos";
import ProductInfo from "@/components/ProductInfo";

import { defaultProduct } from "@/constants/constants";

const ProductPage = async ({ params }: ProductPageProps) => {
  // const slug = (await params).slug;
  // If no such product page exists, show notfound
  // if (!slug) {
  //   return notFound();
  // }

  return (
    <main className="py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      <ProductPhotos images={defaultProduct.images} />
      <ProductInfo product={defaultProduct} />
    </main>
  );
};

export default ProductPage;
