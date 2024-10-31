import React, { FC } from "react";

import * as S from "./styles";
import { CaseCardProps } from "./types";

export const CaseCard: FC<CaseCardProps> = ({ title, description, image, cssImage }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.StyledImage css={cssImage} src={image} alt="decor image" fill />
    <S.StyledDecorImage src="/images/decor/decorCaseCard.png" alt="decor image" fill />
  </S.Wrapper>
);
