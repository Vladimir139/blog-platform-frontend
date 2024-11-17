import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";

export interface InputProps<T = string> {
  name?: string;
  placeholder?: string;
  value: T;
  defaultValue?: T;
  onChange:
    | ((event: ChangeEvent<HTMLInputElement>, value: T) => void)
    | Dispatch<SetStateAction<T>>;

  label?: ReactNode | string;
  size?: "default";
  radius?: "default";
  theme?: "default";
  stretch?: boolean;
  disabled?: boolean;
  error?: string;
}
