import { Catalog } from "@/components/catalog/catalog";
import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-start justify-center gap-4 py-8 md:py-10">
      <h3 className={title({ size: "sm" })}>Каталог</h3>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-3">
        <Catalog
          name={"Гитары"}
          href={"/catalog/guitars"}
          imgSrc={
            "https://i0.wp.com/10sguitars.com/wp-content/uploads/2021/07/10S-Guitars-V-2.png?resize=300%2C300&ssl=1"
          }
        />
        <Catalog
          name={"Гитары"}
          href={"/catalog/guitars"}
          imgSrc={
            "https://i0.wp.com/10sguitars.com/wp-content/uploads/2021/07/10S-Guitars-V-2.png?resize=300%2C300&ssl=1"
          }
        />
        <Catalog
          name={"Гитары"}
          href={"/catalog/guitars"}
          imgSrc={
            "https://i0.wp.com/10sguitars.com/wp-content/uploads/2021/07/10S-Guitars-V-2.png?resize=300%2C300&ssl=1"
          }
        />
        <Catalog
          name={"Гитары"}
          href={"/catalog/guitars"}
          imgSrc={
            "https://i0.wp.com/10sguitars.com/wp-content/uploads/2021/07/10S-Guitars-V-2.png?resize=300%2C300&ssl=1"
          }
        />
        <Catalog
          name={"Гитары"}
          href={"/catalog/guitars"}
          imgSrc={
            "https://i0.wp.com/10sguitars.com/wp-content/uploads/2021/07/10S-Guitars-V-2.png?resize=300%2C300&ssl=1"
          }
        />
        <Catalog
          name={"Гитары"}
          href={"/catalog/guitars"}
          imgSrc={
            "https://i0.wp.com/10sguitars.com/wp-content/uploads/2021/07/10S-Guitars-V-2.png?resize=300%2C300&ssl=1"
          }
        />

        <Catalog
          name={"Гитары"}
          href={"/catalog/guitars"}
          imgSrc={
            "https://i0.wp.com/10sguitars.com/wp-content/uploads/2021/07/10S-Guitars-V-2.png?resize=300%2C300&ssl=1"
          }
        />
        <Catalog
          name={"Гитары"}
          href={"/catalog/guitars"}
          imgSrc={
            "https://i0.wp.com/10sguitars.com/wp-content/uploads/2021/07/10S-Guitars-V-2.png?resize=300%2C300&ssl=1"
          }
        />
        <Catalog
          name={"Гитары"}
          href={"/catalog/guitars"}
          imgSrc={
            "https://i0.wp.com/10sguitars.com/wp-content/uploads/2021/07/10S-Guitars-V-2.png?resize=300%2C300&ssl=1"
          }
        />
        <Catalog
          name={"Гитары"}
          href={"/catalog/guitars"}
          imgSrc={
            "https://i0.wp.com/10sguitars.com/wp-content/uploads/2021/07/10S-Guitars-V-2.png?resize=300%2C300&ssl=1"
          }
        />
        <Catalog
          name={"Гитары"}
          href={"/catalog/guitars"}
          imgSrc={
            "https://i0.wp.com/10sguitars.com/wp-content/uploads/2021/07/10S-Guitars-V-2.png?resize=300%2C300&ssl=1"
          }
        />
      </div>
    </section>
  );
}
