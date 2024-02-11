"use client";

import { __Catalog__, __catalog__ } from "@/__mocks__/";
import { Catalog } from "@/components/catalog/catalog";

import type { Query } from "@/types/query-params";

// TODO: Реализовать более быстрый поиск по id каталога
export default function CatalogCategory({ params: { id } }: Query) {
  const findCatalog = __catalog__.find(
    (catalog) => catalog.id === Number(id)
  )?.catalogs;

  const findNameCatalog = __catalog__.find(
    (name) => name.id === Number(id)
  )?.title;

  return (
    <section>
      <h1 className="font-bold text-3xl mb-4">{findNameCatalog}</h1>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-3">
        {findCatalog?.map((item, index) => (
          <Catalog
            key={index}
            name={item.title}
            href={`/catalog/select/${item.id}`}
            imgSrc={item.image}
          />
        ))}
      </div>
    </section>
  );
}
