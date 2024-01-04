import Image from "next/image";

import { SpecsOfGuitar } from "@/types";
import { ValueItemsCart } from "./value-items-cart";

type Props = Pick<SpecsOfGuitar, "picture" | "type" | "article">;

export const ItemCartPreview = ({ picture, type, article }: Props) => {
  return (
    <div className="flex flex-row justify-center items-center w-full px-4 py-6 border-1 rounded-xl mb-4">
      <Image
        className="mr-4 rounded self-start"
        src={picture}
        alt="guitar"
        width={80}
        height={80}
      />
      <div className="w-full flex flex-col justify-between items-center sm:flex-row md:flex-row">
        <div className="flex flex-col sm:flex-row md:flex-row">
          <article className="font-medium text-xl">{type}&nbsp;</article>
          <article className="font-regular text-lg">{article}</article>
        </div>
        <div className="flex flex-row justify-center max-w-sm mt-4 self-end sm:mt-0 md:mt-0">
          <ValueItemsCart />
          <label className="mr-0 ml-2 m-auto self-end">384&nbsp;990₽</label>
        </div>
      </div>
    </div>
  );
};
