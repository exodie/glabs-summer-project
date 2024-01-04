"use client";

import { Input, Button } from "@nextui-org/react";
import { IconsDelete } from "../icons/delete";

// TODO: Перенести в отдельный server component нынешний Input
export const ValueItemsCart = () => {
  return (
    <div className="flex flex-row ml-auto mr-0 items-center justify-center">
      <Input defaultValue="1" type="number" className="w-14 ml-auto mr-2" />
      <Button
        size="lg"
        isIconOnly
        aria-label="Удалить из корзины"
        color="default"
      >
        <IconsDelete />
      </Button>
    </div>
  );
};
