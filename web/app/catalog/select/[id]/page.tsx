"use client";

import { __catalog__guitars__ } from "@/__mocks__";
import { ProductCartOfItems } from "@/components/cart/product-cart";
import { FilterComponent } from "@/components/filters/filter.component";
import type { Query } from "@/types/query-params";

export default function SelectWithId({ params: { id } }: Query) {
  const findCatalog = __catalog__guitars__.find(
    (catalog) => catalog.id === Number(id)
  )!.catalogs;

  const findNameCatalog = __catalog__guitars__.find(
    (name) => name.id === Number(id)
  )!.title;

  return (
    <section className="bg-red-500 flex flex-col justify-center">
      <h1 className="font-bold text-3xl mb-4">{findNameCatalog}</h1>
      <div className="mr-auto ml-0 w-full bg-yellow-500">
        <h3 className="font-medium text-2xl">Фильтры</h3>
        <FilterComponent {...[{ header: "123", body: <>123</> }]} />
      </div>
      <div className="bg-slate-500 w-9/12 ml-auto mr-0 grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-3">
        {findCatalog?.map((item, index) => (
          <ProductCartOfItems key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
