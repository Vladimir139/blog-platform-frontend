import React, { FC } from "react";

import { Button } from "@/shared/ui/atoms";

import * as S from "./styles";

export const PreviewBlock: FC = () => (
  <S.Wrapper>
    <S.WrapperGlowsLeftBottom>
      <S.RedRadial />
      <S.RedAndWhiteRadial />
      <S.LightBlueRadial />
      <S.BlueRadial />
      <S.SmallBlueRadial />
      <S.PinkRadial />
      <S.LeftBottomLines src="/images/preview/leftBottomLines.png" alt="decor lines" fill />
      <S.SmallPink1Radial />
      <S.SmallPink2Radial />
      <S.SmallPinkVector1Radial />
    </S.WrapperGlowsLeftBottom>
    <S.WrapperGlowsRightTop>
      <S.RedRadial isTopRight />
      <S.RedAndWhiteRadial isTopRight />
      <S.LightBlueRadial isTopRight />
      <S.BlueRadial isTopRight />
      <S.SmallBlueRadial isTopRight />
      <S.PinkRadial isTopRight />
      <S.LeftBottomLines
        isTopRight
        src="/images/preview/leftBottomLines.png"
        alt="decor lines"
        fill
      />
      <S.SmallPink1Radial isTopRight />
      <S.SmallPink2Radial isTopRight />
      <S.SmallPinkVector1Radial isTopRight />
    </S.WrapperGlowsRightTop>
    <S.DecorImageBigGlow src="/images/preview/previewBigGlow.png" alt="decor image" fill />
    <S.Title>Navigating the whole web3 innovation from one app</S.Title>
    <S.Description>
      Cryptory is a tech solution that gives you access to the most innovative tools/utilities at
      your fingertip as at when available.
      <S.DecorImageRubinGlow src="/images/decor/rubinGlow.png" alt="decor image" fill />
    </S.Description>
    <S.ButtonsList>
      <Button theme="purple" stretch>
        <div style={{ position: "relative", zIndex: 4 }}>Launch DApp</div>
      </Button>
      <Button theme="dark" stretch>
        <span>Buy on Uniswap</span>
      </Button>
    </S.ButtonsList>
  </S.Wrapper>
);
