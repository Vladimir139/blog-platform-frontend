import { FC } from "react";

import * as S from "./style";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({ children, stretch, disabled, theme }) => (
  <S.Button stretch={stretch} disabled={disabled} theme={theme}>
    {children}
  </S.Button>
);
