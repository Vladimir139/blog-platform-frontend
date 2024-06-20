import React, { FC, ReactNode } from "react";

import * as S from "./styles";

export const Container: FC<{ children: ReactNode }> = ({ children }) => (
  <S.Container>{children}</S.Container>
);
