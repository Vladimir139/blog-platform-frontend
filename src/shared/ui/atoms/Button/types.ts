import { CSS } from "@stitches/react";
import { MouseEvent as ReactMouseEvent, ReactNode } from "react";

export type ButtonTheme = "orange" | "grey";
export type ButtonProps = {
  theme?: ButtonTheme;
  children?: ReactNode | string;
  onClick?: (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
  stretch?: boolean;
  disabled?: boolean;
  css?: CSS;
};
