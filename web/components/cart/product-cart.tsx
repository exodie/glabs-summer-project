import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@nextui-org/react";
import { HeartIcon } from "@radix-ui/react-icons";

import type { SpecsOfGuitar } from "@/types";

type Props = Pick<
  SpecsOfGuitar,
  | "codeOfItem"
  | "picture"
  | "type"
  | "price"
  | "manufacturer"
  | "name"
  | "caseColor"
>;

export const ProductCartOfItems: FC<Props> = (props) => {
  return (
    <div className="flex flex-col item-center px-2 py-4 gap-y-2 rounded-md">
      {/*// TODO: h-[385] - костыль, переделать */}
      <div className="w-full rounded-md">
        <Image
          className="w-full"
          width={1000}
          height={1000}
          src={props.picture}
          alt="__picture"
        />
      </div>

      <Link
        href={`/product/${props.codeOfItem}`}
        className="text-lg hover:text-primary"
      >
        {props.type} {props.manufacturer} {props.name} {props.caseColor}
      </Link>

      <span className="font-bold text-2xl mt-auto mb-0">{props.price} RUB</span>

      <div className="flex flex-row items-center justify-between gap-2 mt-auto mb-0">
        <Button
          className="rounded-md text-xl font-light w-full"
          variant={"shadow"}
          color="primary"
        >
          Купить
        </Button>
        <Button isIconOnly>
          <HeartIcon width={22} height={22} />
        </Button>
      </div>
    </div>
  );
};
