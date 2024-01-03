import { TypesOfGuitar } from "@/types";
import { ItemCartPreview } from "./item-cart-preview";

export const ItemsCart = () => {
  const mocks = {
    picture:
      "https://skifmusic.ru/thumbs/72/08/270x270_1_normal_0c0c46697a20fbf335c1d49bce82.webp",
    type: TypesOfGuitar.ElectroBass,
    article: "Fender Precision Elite II Natural USA 1983s w/case",
  };

  return (
    <div>
      <ItemCartPreview {...mocks} />
      <ItemCartPreview {...mocks} />
      <ItemCartPreview {...mocks} />
      <ItemCartPreview {...mocks} />
    </div>
  );
};
