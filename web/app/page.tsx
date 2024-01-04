import { type __Catalog__, __catalog__ } from "@/__mocks__/catalog.mocks";
import { Catalog } from "@/components/catalog/catalog";
import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-start justify-center gap-4 py-8 md:py-6">
      <h3 className={title({ size: "sm" })}>Каталог</h3>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-3">
        {__catalog__.map((item: __Catalog__, index) => (
          <Catalog
            key={index}
            name={item.title}
            href={`/catalog/${item.id}`}
            imgSrc={item.image}
          />
        ))}
      </div>
    </section>
  );
}
