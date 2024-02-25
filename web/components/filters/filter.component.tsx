import type { FC, ReactNode } from "react";

export interface Filter {
  header: string;
  body: ReactNode;
}

export const FilterComponent: FC<Filter[]> = (props: Filter[]) => {
  return (
    <aside className="mr-auto ml-0">
      {123}
    </aside>
  );
};
