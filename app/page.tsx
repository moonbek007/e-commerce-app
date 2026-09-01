import Slider from "@/components/Slider";
import ProductList from "@/components/ProductList";

import { PRODUCT_LIST_TITLES } from "@/constants/constants";

export default function Home() {
  return (
    <main>
      <Slider />
      <ProductList title={PRODUCT_LIST_TITLES.FEATURED} />
      <ProductList title={PRODUCT_LIST_TITLES.NEW} />
    </main>
  );
}
