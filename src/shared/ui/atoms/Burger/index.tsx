import React, { FC } from "react";

import * as S from "./style";
import { BurgerProps } from "./types";

export const Burger: FC<BurgerProps> = ({ onClick, isActive }) => (
  <S.Burger onClick={onClick} isActive={isActive}>
    <S.MiddleLine isActive={isActive} />
  </S.Burger>
);
