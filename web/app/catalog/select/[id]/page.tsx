"use client";

import { useMemo, useState, type Key } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { ProductCartOfItems } from "@/components/cart/product-cart";
import { Filter, FilterComponent } from "@/components/filters/filter.component";

import { __catalog__guitars__ } from "@/__mocks__";
import type { Query } from "@/types/query-params";

// TODO: Вынести все доступные фильтры в отдельную shared/
const filteres: Filter[] = [
  { header: "Цена", body: <>123</> },
  { header: "Производители", body: <>456</> },
  { header: "Состояния", body: <>789</> },
  { header: "Рейтинг", body: <>146</> },
  { header: "Наличие в магазинах", body: <>146</> },
];

// TODO: Переделать текущие dropdown под отдельный компонент
// TODO: Отрефакторить этот файл до нормального вида
export default function SelectWithId({ params: { id } }: Query) {
  const [selectedKeys, setSelectedKeys] = useState<Set<Key> | "all">(
    new Set(["В наличии"])
  );

  const findCatalog = __catalog__guitars__.find(
    (catalog) => catalog.id === Number(id)
  )!.catalogs;

  const findNameCatalog = __catalog__guitars__.find(
    (name) => name.id === Number(id)
  )!.title;

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <section className="container mx-auto flex flex-col">
      <h1 className="font-bold text-2xl mb-4">{findNameCatalog}</h1>

      <div className="flex">
        <div className="w-1/4 flex flex-col gap-y-4">
          <h2 className="font-medium text-2xl">Фильтры</h2>

          {filteres.map(({ header, body }, index) => (
            <FilterComponent key={index} header={header} body={body} />
          ))}
        </div>
        <div className="w-9/12">
          <div className="flex flex-row items-center mb-4">
            <h3 className="font-bold text-xl">{findCatalog?.length} найдено</h3>

            <div className="mr-0 ml-auto flex gap-x-2">
              {/* // TODO: Проблемы с отображением в {selectedValue} из за русского языка */}
              <Dropdown>
                <DropdownTrigger>
                  <Button className="rounded-md capitalize" variant="bordered">
                    {selectedValue}
                    <ChevronDownIcon />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedKeys}
                  onSelectionChange={(keys) =>
                    setSelectedKeys(keys as Set<string>)
                  }
                >
                  <DropdownItem key="stock">В наличии</DropdownItem>
                  <DropdownItem key="stockAndOrder">
                    В наличии и под заказ
                  </DropdownItem>
                  <DropdownItem key="order">Под заказ</DropdownItem>
                  <DropdownItem key="missing">Отсутствующие</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownTrigger>
                  <Button className="rounded-md capitalize" variant="bordered">
                    Все товары <ChevronDownIcon />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new">New file</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                  >
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>

          <div className="ml-auto mr-0 rounded-sm p-4 grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-3">
            {findCatalog?.map((item, index) => (
              <ProductCartOfItems key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
