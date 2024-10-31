import { CSS } from "@stitches/react";
import { ReactNode } from "react";

export interface TitleProps {
  children: ReactNode | string;
  subTitle?: ReactNode | string;
  id?: string;
  cssAnchor?: CSS;
}
