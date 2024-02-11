import { TypesOfGuitar } from "@/types";
import { __catalog__guitars__ } from "./guitar.mocks";

export interface __Catalog__ {
  id: number;
  title: string;
  image: string;
  catalogs: __Catalog_guitars__[] | null;
}

export interface __Catalog_guitars__ {
  id: number;
  title: string;
  type: TypesOfGuitar;
  image: string;
}

// TODO: Поменять ссылки для фото на нормальные где они пропущены
export const __catalog__: __Catalog__[] = [
  {
    id: 1,
    title: "Гитары",
    image:
      "https://i0.wp.com/10sguitars.com/wp-content/uploads/2021/07/10S-Guitars-V-2.png?resize=300%2C300&ssl=1",
    catalogs: __catalog__guitars__,
  },
  {
    id: 2,
    title: "Гитарные струны",
    image:
      "https://guitar-guitar.ru/upload/iblock/762/zv5pg0dinymtvmp5i0a237c5sbg81anc.jpg",
    catalogs: null,
  },
  {
    id: 3,
    title: "Гитарное усиление",
    image: "https://generated.vusercontent.net/placeholder.svg",
    catalogs: null,
  },
  {
    id: 4,
    title: "Педали и процессоры эффектов",
    image: "https://generated.vusercontent.net/placeholder.svg",
    catalogs: null,
  },
  {
    id: 5,
    title: "Чехлы и кейсы для гитар",
    image: "https://generated.vusercontent.net/placeholder.svg",
    catalogs: null,
  },
  {
    id: 6,
    title: "Аксессуары для гитар",
    image: "https://generated.vusercontent.net/placeholder.svg",
    catalogs: null,
  },
  {
    id: 7,
    title: "Комплектующие для гитар",
    image: "https://generated.vusercontent.net/placeholder.svg",
    catalogs: null,
  },
  {
    id: 8,
    title: "Коммутация",
    image: "https://generated.vusercontent.net/placeholder.svg",
    catalogs: null,
  },
];
