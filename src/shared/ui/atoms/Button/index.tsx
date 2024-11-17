import { FC } from "react";

import * as S from "./styles";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <S.Button {...props}>{children}</S.Button>
);
