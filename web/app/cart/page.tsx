import { ItemsCart } from "@/components/cart/items-cart";
import { UserCartForm } from "@/components/form/cart-form";

export default function Cart() {
  return (
    <section>
      <h1 className="font-bold text-3xl mb-6">Ваша корзина</h1>
      <UserCartForm />

      <h2 className="font-medium text-1xl mb-6">Товары в корзине</h2>
      <ItemsCart />
    </section>
  );
}
