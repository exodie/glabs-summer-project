"use client";

import { __catalog__guitars__ } from "@/__mocks__";
import { Catalog } from "@/components/catalog/catalog";
import type { Query } from "@/types/query-params";

export default function SelectWithId({ params: { id } }: Query) {
  const findCatalog = __catalog__guitars__.find(
    (catalog) => catalog.id === Number(id)
  )?.catalogs;

  const findNameCatalog = __catalog__guitars__.find(
    (name) => name.id === Number(id)
  )?.title;

  return (
    <section>
      <h1 className="font-bold text-3xl mb-4">{findNameCatalog}</h1>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-3">
        {findCatalog?.map((item, index) => (
          <Catalog
            key={index}
            name={`${item.type} ${item.manufacturer} ${item.article} ${item.bodyShape}`}
            href={`/product/${item.codeOfItem}`}
            imgSrc={item.picture}
          />
        ))}
      </div>
    </section>
  );
}
