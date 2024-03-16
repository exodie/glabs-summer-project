import type { FC, ReactNode } from "react";

export interface Filter {
  header: string;
  body: ReactNode;
}

export const FilterComponent: FC<Filter> = ({ header, body }) => {
  return (
    <aside className="mr-auto ml-0">
      <h3 className="font-medium">- {header} </h3>
      <div>{body}</div>
    </aside>
  );
};
