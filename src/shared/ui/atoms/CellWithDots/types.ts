import { CSS } from "@stitches/react";
import { ReactNode } from "react";

export interface CellWithDotsProps {
  children?: ReactNode | string;
  noBorderTop?: boolean;
  noBorderRight?: boolean;
  noBorderBottom?: boolean;
  noBorderLeft?: boolean;
  noDotTopLeft?: boolean;
  noDotTopRight?: boolean;
  noDotBottomRight?: boolean;
  noDotBottomLeft?: boolean;
  css?: CSS;
}
