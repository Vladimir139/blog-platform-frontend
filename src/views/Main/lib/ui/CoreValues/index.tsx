import React, { FC } from "react";

import { Button } from "@/shared/ui/atoms";

import * as S from "./styles";

export const CoreValues: FC = () => (
  <S.Wrapper>
    <S.WrapperInfo>
      <S.Title>About Cryptory</S.Title>
      <S.Description>
        Cryptory is an advanced Web3 aggregator and the first multichain tool for automated KOL
        trade copying on Telegram. The platform integrates a range of innovative products, including
        trading and analytics tools, KOL copy trading, AI-driven signals, a utility launchpad, and
        more, making it ideal for both beginners and seasoned traders
      </S.Description>
      <S.WrapperButton>
        <Button
          theme="purple"
          stretch
          onClick={() => window.open("https://t.me/CryptoryAI_bot", "_blank")}
        >
          <div style={{ position: "relative", zIndex: 4 }}>Launch DApp</div>
        </Button>
      </S.WrapperButton>
    </S.WrapperInfo>
    <S.DecorImage src="/images/decor/spiralDecoration.png" alt="decor image" fill />
    <S.DecorImageRubinGlow src="/images/decor/rubinGlow.png" alt="decor image" fill />
    <S.DecorImageBigGlow src="/images/decor/bigGlowCoreValues.png" alt="decor image" fill />
  </S.Wrapper>
);
