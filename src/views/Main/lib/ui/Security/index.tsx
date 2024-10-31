import React, { FC } from "react";

import { Title } from "@/shared/ui/atoms";

import * as S from "./styles";

export const Security: FC = () => (
  <S.Wrapper>
    <S.DecorImageBlueGlowOval src="/images/security/blueGlowOval.png" alt="decor image" fill />
    <S.DecorImageRubinGlow src="/images/decor/rubinGlow.png" alt="decor image" fill />
    <Title subTitle="We are proud to announce that we have been fully KYC verified by the trusted:">
      Security
    </Title>
    <S.SecuritiesLogoList>
      <S.SecurityLogo
        security="assureDefi"
        src="/images/security/assureDefi.png"
        alt="security logo"
        fill
      />
      <S.SecurityLogo
        security="blockSafu"
        src="/images/security/blockSafu.png"
        alt="security logo"
        fill
      />
      <S.SecurityLogo security="sp" src="/images/security/sp.png" alt="security logo" fill />
    </S.SecuritiesLogoList>
  </S.Wrapper>
);
