"use client";

import { __catalog__guitars__ } from "@/__mocks__";
import { ProductCartOfItems } from "@/components/cart/product-cart";
import { Filter, FilterComponent } from "@/components/filters/filter.component";
import type { Query } from "@/types/query-params";
import { Button } from "@nextui-org/button";

export default function SelectWithId({ params: { id } }: Query) {
  const findCatalog = __catalog__guitars__.find(
    (catalog) => catalog.id === Number(id)
  )!.catalogs;

  const findNameCatalog = __catalog__guitars__.find(
    (name) => name.id === Number(id)
  )!.title;

  const filteres: Filter[] = [
    { header: "Цена", body: <>123</> },
    { header: "Производители", body: <>456</> },
    { header: "Состояния", body: <>789</> },
    { header: "Рейтинг", body: <>146</> },
    { header: "Наличие в магазинах", body: <>146</> },
  ];

  return (
    <section className="container mx-auto flex flex-col">
      <h1 className="font-bold text-2xl mb-4">{findNameCatalog}</h1>

      {/* Fast filters */}
      <div className="py-2 flex flex-row gap-x-4">
        <Button variant="ghost">Test1</Button>
        <Button>Test1</Button>
        <Button>Test1</Button>
        <Button>Test1</Button>
        <Button>Test1</Button>
        <Button>Test1</Button>
        <Button>Test1</Button>
        <Button>Test1</Button>
        <Button>Test1</Button>
        <Button>Test1</Button>
        <Button>Test1</Button>
        <Button>Test1</Button>
        <Button>Test1</Button>
        <Button>Test1</Button>
      </div>

      <div className="flex">
        <div className="w-1/4 flex flex-col gap-y-4">
          <h2 className="font-medium text-2xl">Фильтры</h2>

          {filteres.map(({ header, body }, index) => (
            <FilterComponent key={index} header={header} body={body} />
          ))}
        </div>
        <div className="w-9/12">
          <h3 className="font-bold text-xl">{findCatalog?.length} найдено</h3>

          <div className="bg-gray-100 ml-auto mr-0 rounded-sm p-4 grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-3">
            {findCatalog?.map((item, index) => (
              <ProductCartOfItems key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
