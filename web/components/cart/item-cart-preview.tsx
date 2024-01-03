import Image from "next/image";

import { SpecsOfGuitar } from "@/types";
import { ValueItemsCart } from "./value-items-cart";

type Props = Pick<SpecsOfGuitar, "picture" | "type" | "article">;

export const ItemCartPreview = ({ picture, type, article }: Props) => {
  return (
    <div className="flex flex-row items-center w-full px-4 py-6 border-1 rounded-xl mb-4">
      <Image src={picture} alt="guitar" width={80} height={80} />
      <article className="font-medium text-xl ml-6">{type}</article>
      <article className="font-regular text-lg ml-2">{article}</article>
      <ValueItemsCart />
    </div>
  );
};
