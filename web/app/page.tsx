import { Catalog } from "@/components/catalog/catalog";
import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-start justify-center gap-4 py-8 md:py-10">
      <h3 className={title({ size: "sm" })}>Каталог</h3>

      <div className="grid grid-cols-3 gap-10">
        <Catalog />
        <Catalog />
        <Catalog />
        <Catalog />
        <Catalog />
        <Catalog />
        <Catalog />
        <Catalog />
        <Catalog />
        <Catalog />
        <Catalog />
        <Catalog />
      </div>
    </section>
  );
}
