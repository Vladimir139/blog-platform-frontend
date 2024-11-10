import { FC } from "react";

import * as S from "./style";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({ children, stretch, disabled, theme, css, onClick }) => (
  <S.Button stretch={stretch} disabled={disabled} theme={theme} css={css} onClick={onClick}>
    {children}
  </S.Button>
);
