import React, { FC } from "react";

import * as S from "./styles";

export const GuardianOfWeb3Freedom: FC = () => (
  <S.Wrapper>
    <S.Title>The Guardian of Web3 Freedom</S.Title>
    <S.BlockInfoList>
      <S.BlockInfo>
        In the blockchain frontier, retail community was stuck in a pit of limited access and
        unequal opportunities.
      </S.BlockInfo>
      <S.BlockInfo isGradient>
        Despite their dreams and efforts, traditional institutions kept financial freedom out of
        reach.
      </S.BlockInfo>
      <S.BlockInfo>
        From this struggle, the AlphaMind Unicorn was created-a guardian to uplift and guide
        dreamers toward a brighter future.
      </S.BlockInfo>
    </S.BlockInfoList>
    <S.WrapperVideo>
      <S.DecorSquare
        src="/images/guardianOfWeb3Freedom/gradientSquare.png"
        alt="decor square"
        fill
      />
      <S.DecorShadow
        src="/images/guardianOfWeb3Freedom/gradientShadow.png"
        alt="decor square"
        fill
      />
    </S.WrapperVideo>
  </S.Wrapper>
);
