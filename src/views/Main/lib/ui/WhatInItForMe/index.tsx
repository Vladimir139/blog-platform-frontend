import React, { FC } from "react";
import { useMedia } from "react-use";

import {
  BlockAboveLineIcon,
  DecompositionIcon,
  KeyInBlocksIcon,
  ManWithKeyIcon,
} from "@/shared/lib/icons";

import * as S from "./styles";

export const WhatInItForMe: FC = () => {
  const isMobile = useMedia("(max-width: 540px)", false);

  return (
    <S.Wrapper>
      {/* <S.DecorShadow src="/images/whatInItForMe/whatInItForMeGlow1.png" alt="decor glow" fill /> */}
      <S.Title>Whats in it for me?</S.Title>
      <S.AdvantageList>
        <S.Advantage>
          <S.WrapperIcon>
            <DecompositionIcon isSmall={isMobile} />
          </S.WrapperIcon>
          <S.WrapperText>Insider Updates</S.WrapperText>
        </S.Advantage>
        <S.Advantage>
          <S.WrapperIcon>
            <KeyInBlocksIcon isSmall={isMobile} />
          </S.WrapperIcon>
          <S.WrapperText>Guaranted Token Aidrops</S.WrapperText>
        </S.Advantage>
        <S.Advantage>
          <S.WrapperIcon>
            <ManWithKeyIcon isSmall={isMobile} />
          </S.WrapperIcon>
          <S.WrapperText>Early Access to Token Launches</S.WrapperText>
        </S.Advantage>
        <S.Advantage>
          <S.WrapperIcon>
            <BlockAboveLineIcon isSmall={isMobile} />
          </S.WrapperIcon>
          <S.WrapperText>Whitelist Allocations for Token Releases</S.WrapperText>
        </S.Advantage>
        <S.Advantage>
          <S.WrapperIcon>
            <DecompositionIcon isSmall={isMobile} />
          </S.WrapperIcon>
          <S.WrapperText>Seasonal Digital Collectibles</S.WrapperText>
        </S.Advantage>
        <S.Advantage>
          <S.WrapperIcon>
            <KeyInBlocksIcon isSmall={isMobile} />
          </S.WrapperIcon>
          <S.WrapperText>Karma Boosts</S.WrapperText>
        </S.Advantage>
        <S.Advantage>
          <S.WrapperIcon>
            <ManWithKeyIcon isSmall={isMobile} />
          </S.WrapperIcon>
          <S.WrapperText>VIP Access to High-profile Token Launches</S.WrapperText>
        </S.Advantage>
        <S.Advantage>
          <S.WrapperIcon>
            <BlockAboveLineIcon isSmall={isMobile} />
          </S.WrapperIcon>
          <S.WrapperText>Voting Power in Community-Driven Decisions</S.WrapperText>
        </S.Advantage>
      </S.AdvantageList>
      <S.SubTitle>And more!</S.SubTitle>
    </S.Wrapper>
  );
};
