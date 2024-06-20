import React, { FC } from "react";

import * as S from "./styles";

export const NeedHelp: FC = () => (
  <S.Wrapper>
    <S.Title>Need Help?</S.Title>
    <S.BlockList>
      <S.Block>My funds are on different chain</S.Block>
      <S.Block>I am encountering issues during minting</S.Block>
    </S.BlockList>
  </S.Wrapper>
);
