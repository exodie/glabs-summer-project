import { ReactNode } from "react";

export default function CartLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col w-full items-start justify-center gap-4 py-8 md:py-10">
      {children}
    </section>
  );
}
