import React, { FC } from "react";
import { useMedia } from "react-use";

import * as S from "./styles";
import { CaseCardProps } from "./types";

export const CaseCard: FC<CaseCardProps> = ({ title, description, image, cssImage }) => {
  const isMobileDescForCryprotyDappCard480 = useMedia("(max-width: 480px)", false);
  const isMobileDescForCryprotyDappCard = useMedia("(max-width: 350px)", false);

  let displayedDescription = description;

  if (isMobileDescForCryprotyDappCard480 && title === "Cryptory DApp store and search engine") {
    displayedDescription = isMobileDescForCryprotyDappCard
      ? "Simple access to thousands of utilities in a user-friendly interface and convenient navigation through\nall web3\nand AI innovations"
      : "Simple access to thousands of utilities in a user-friendly interface and convenient navigation through all web3\nand AI innovations";
  }

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{displayedDescription}</S.Description>
      <S.StyledImage css={cssImage} src={image} alt="decor image" fill />
      <S.StyledDecorImage src="/images/decor/decorCaseCard.png" alt="decor image" fill />
    </S.Wrapper>
  );
};
