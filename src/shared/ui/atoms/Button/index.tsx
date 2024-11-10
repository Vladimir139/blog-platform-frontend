import { FC } from "react";

import * as S from "./style";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({ children, stretch, disabled, theme, css }) => (
  <S.Button stretch={stretch} disabled={disabled} theme={theme} css={css}>
    {children}
  </S.Button>
);
