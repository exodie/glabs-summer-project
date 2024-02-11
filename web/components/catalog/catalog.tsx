import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";

type CatalogProps = {
  name: string;
  href: string;
  imgSrc: string;
};

export const Catalog = (props: CatalogProps) => {
  return (
    <Link href={props.href}>
      <Card className="px-2 w-full">
        <CardHeader>
          <h1 className="font-medium text-xl">{props.name}</h1>
        </CardHeader>
        <CardBody className="w-full flex items-center">
          <Image
            alt="Card background"
            className="px-4 rounded w-full max-w-[400px] h-full max-h-[300px]"
            loading="lazy"
            src={props.imgSrc}
          />
        </CardBody>
      </Card>
    </Link>
  );
};
