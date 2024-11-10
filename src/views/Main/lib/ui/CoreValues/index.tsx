import React, { FC } from "react";

import { Button } from "@/shared/ui/atoms";

import * as S from "./styles";

export const CoreValues: FC = () => (
  <S.Wrapper>
    <S.WrapperInfo>
      <S.Title>CORE VALUES</S.Title>
      <S.Description>
        At Cryptory, we are guided by three core values: integrity, diligence, and accountability.
        These values shape the way we conduct ourselves as a company and inform our interactions
        with our customers, partners, and employees.
      </S.Description>
      <S.WrapperButton>
        <Button
          theme="purple"
          stretch
          onClick={() => window.open("https://t.me/CryptoryAI_bot", "_blank")}
        >
          <div style={{ position: "relative", zIndex: 4 }}>Open dashboard</div>
        </Button>
      </S.WrapperButton>
    </S.WrapperInfo>
    <S.DecorImage src="/images/decor/spiralDecoration.png" alt="decor image" fill />
    <S.DecorImageRubinGlow src="/images/decor/rubinGlow.png" alt="decor image" fill />
    <S.DecorImageBigGlow src="/images/decor/bigGlowCoreValues.png" alt="decor image" fill />
  </S.Wrapper>
);
