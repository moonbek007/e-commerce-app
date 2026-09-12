import CartUserInfo from "@/components/CartUserInfo";
import CartOrders from "@/components/CartOrders";
import CartWrapper from "@/components/CartWrapper";

const CartPage = async () => {
  return (
    <main className="flex flex-1 justify-center gap-12 py-12 bg-white text-gray-800 font-sans antialiased">
      <CartWrapper>
        <CartUserInfo />
        <CartOrders />
      </CartWrapper>
    </main>
  );
};

export default CartPage;
