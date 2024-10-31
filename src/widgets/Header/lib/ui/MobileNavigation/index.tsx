import React, { FC, useEffect } from "react";

import * as S from "./style";
import { MobileNavigationProps } from "./types";

export const MobileNavigation: FC<MobileNavigationProps> = ({ isOpened, handleClose }) => {
  useEffect(() => {
    if (isOpened) {
      document.body.classList.add("overflow-hidden");

      return;
    }

    document.body.classList.remove("overflow-hidden");
  }, [isOpened]);

  return (
    <S.Wrapper isOpened={isOpened} onClick={handleClose}>
      <S.InnerWrap onClick={(e) => e.stopPropagation()}>
        <S.TopWrapper>
          <S.NavigationHeader>
            <S.Logo href="/">Леонович Дарья</S.Logo>
          </S.NavigationHeader>
          <S.Navigation>
            <S.NavLink href="/staff/daria-leonovich/#reviews" onClick={handleClose}>
              Отзывы
            </S.NavLink>
            <S.NavLink href="/#programs" onClick={handleClose}>
              Программы
            </S.NavLink>
          </S.Navigation>
        </S.TopWrapper>
      </S.InnerWrap>
    </S.Wrapper>
  );
};
