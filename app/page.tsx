import Slider from "@/components/Slider";
import ProductList from "@/components/ProductList";
import CategoryList from "@/components/CategoryList";

import { PRODUCT_LIST_TITLES } from "@/constants/constants";

export default function Home() {
  return (
    <main>
      <Slider />
      <ProductList title={PRODUCT_LIST_TITLES.NEW} />
      <CategoryList />
      <ProductList title={PRODUCT_LIST_TITLES.FEATURED} />
    </main>
  );
}
