import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode | string;
  stretch?: boolean;
  disabled?: boolean;
}
