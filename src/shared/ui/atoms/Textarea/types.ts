import { ChangeEvent, ReactNode } from "react";

export interface TextareaProps<T = string> {
  name?: string;
  placeholder?: string;
  value: T;
  defaultValue?: T;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  label?: ReactNode | string;
  size?: "default";
  radius?: "default";
  theme?: "default";
  stretch?: boolean;
  disabled?: boolean;
  error?: string;
}
