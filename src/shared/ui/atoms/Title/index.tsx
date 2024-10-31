import React, { FC } from "react";

import * as S from "./styles";
import { TitleProps } from "./types";

export const Title: FC<TitleProps> = ({ children, subTitle, id, cssAnchor }) => (
  <>
    {id && <S.AnchorHelper id={id} css={cssAnchor} />}
    <S.StyledTitle>{children}</S.StyledTitle>
    {subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
  </>
);
