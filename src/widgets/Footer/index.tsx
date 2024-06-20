import Link from "next/link";
import React, { FC } from "react";

import { Container } from "@/shared/ui/atoms";

import * as S from "./styles";

export const Footer: FC = () => (
  <S.FooterWrapper>
    <Container>
      <S.InnerWrapper>
        <S.LeftWrapper>
          Don’t miss out – be part of the AlphaMind community and let’s shape the future of crypto
          together!
        </S.LeftWrapper>
        <S.RightWrapper>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Service</Link>
        </S.RightWrapper>
      </S.InnerWrapper>
    </Container>
    {/* <S.BigGlowImage src="/images/footer/bigGlow1.png" alt="glow photo" fill /> */}
  </S.FooterWrapper>
);
