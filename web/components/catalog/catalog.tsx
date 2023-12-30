import { Card, CardHeader, Image, Link } from "@nextui-org/react";

type CatalogProps = {
  name: string;
  href: string;
  imgSrc: string;
};

export const Catalog = (props: CatalogProps) => {
  return (
    <Link href={props.href}>
      <Card className="p-6">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <h1 className="font-medium text-xl">{props.name}</h1>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="p-2 z-0 w-full h-full object-cover"
          loading="lazy"
          src={props.imgSrc}
        />
      </Card>
    </Link>
  );
};
