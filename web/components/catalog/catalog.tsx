import {
  Card,
  CardHeader,
  Image,
} from "@nextui-org/react";

export const Catalog = () => {
  return (
    <Card className="p-6">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h1 className="font-medium text-xl">Гитары</h1>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="p-2 z-0 w-full h-full object-cover"
        loading="lazy"
        src="https://i0.wp.com/10sguitars.com/wp-content/uploads/2021/07/10S-Guitars-V-2.png?resize=300%2C300&ssl=1"
      />
    </Card>
  );
};
