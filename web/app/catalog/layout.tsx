import { ReactNode } from "react";

export default function CatalogLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col w-full items-start justify-center gap-4 py-8 md:py-10 md:ml-4 md:mr-4">
      {children}
    </section>
  );
}
