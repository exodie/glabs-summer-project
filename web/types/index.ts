export * from "./condition-guitar";
export * from "./specs-guitar";
export * from "./type-guitar";
export * from "./electronics-guitar";

import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
