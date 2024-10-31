import React, { FC } from "react";

import { Button } from "@/shared/ui/atoms";

import * as S from "./styles";

export const PreviewBlock: FC = () => (
  <S.Wrapper>
    <S.DecorImageStars src="/images/preview/previewStars.png" alt="stars image" fill />
    <S.DecorImageBigGlow src="/images/preview/previewBigGlow.png" alt="decor image" fill />
    <S.Slogan>
      Be at the frontline of the <span>Web3 revolution</span>
    </S.Slogan>
    <S.Title>Navigating the whole web3 innovation from one app</S.Title>
    <S.Description>
      Cryptory is a tech solution that gives you access to the most innovative tools/utilities at
      your fingertip as at when available.
      <S.DecorImageRubinGlow src="/images/decor/rubinGlow.png" alt="decor image" fill />
      <S.DecorImageBluePlanet src="/images/decor/bluePlanet.png" alt="decor image" fill />
      <S.DecorImagePinkNlo src="/images/decor/pinkNlo.png" alt="decor image" fill />
    </S.Description>
    <S.ButtonsList>
      <Button theme="purple" stretch>
        <div style={{ position: "relative", zIndex: 4 }}>Open dashboard</div>
      </Button>
      <Button theme="dark" stretch>
        Launch App
      </Button>
    </S.ButtonsList>
  </S.Wrapper>
);
