import CartOrders from "@/components/CartOrders";

const CartPage = async () => {
  return (
    <main className="flex flex-1 justify-center items-center gap-12 py-12 bg-white text-gray-800 font-sans antialiased">
      <CartOrders />
    </main>
  );
};

export default CartPage;
