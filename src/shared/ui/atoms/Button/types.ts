import { CSS } from "@stitches/react";
import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode | string;
  stretch?: boolean;
  disabled?: boolean;
  theme?: "purple" | "dark" | "outline";
  css?: CSS;
  onClick?: () => void;
}
