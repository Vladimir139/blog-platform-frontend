import { ChangeEvent, ReactNode } from "react";

export interface InputProps<T = string> {
  name?: string;
  placeholder?: string;
  value: T;
  defaultValue?: T;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: ReactNode | string;
  size?: "default";
  radius?: "default";
  theme?: "default";
  stretch?: boolean;
  disabled?: boolean;
  error?: string;
}
