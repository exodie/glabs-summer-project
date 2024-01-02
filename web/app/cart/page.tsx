import UserCartForm from "@/components/form/cart-form";

export default function Cart() {
  return (
    <section>
      <h1 className="font-bold text-3xl mb-6">Ваша корзина</h1>
      <UserCartForm />
    </section>
  );
}
