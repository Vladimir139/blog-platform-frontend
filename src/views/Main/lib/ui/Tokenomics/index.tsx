import React, { FC } from "react";

import { Container, Title } from "@/shared/ui/atoms";

import * as S from "./styles";

export const Tokenomics: FC = () => (
  // const isMobileTokenInfo = useMedia("(max-width: 690px)", false);
  // const isMobileDistribution = useMedia("(max-width: 640px)", false);
  // const isMobilePercentages = useMedia("(max-width: 730px)", false);

  <S.Wrapper>
    <Title subTitle="Innovative tools/utilities at your fingertip ." id="tokenomics">
      Tokenomics
    </Title>
    <S.DecorImageRubinGlow src="/images/decor/rubinGlow.png" alt="decor image" fill />
    <S.DecorImageBlueGlowOval src="/images/security/blueGlowOval.png" alt="decor image" fill />
    <Container>
      <S.InnerWrapperTokenomics>
        <S.WrapperTokenInfo>
          <S.TokenInfoBlockTokenInfo>
            <S.BlockTitleTokenInfo>Token Name</S.BlockTitleTokenInfo>
            <S.BlockValueTokenInfo>$CRYPT</S.BlockValueTokenInfo>
          </S.TokenInfoBlockTokenInfo>
          <S.Divider />
          <S.TokenInfoBlockTokenInfo>
            <S.BlockTitleTokenInfo>Blockchain Platform</S.BlockTitleTokenInfo>
            <S.BlockValueTokenInfo>Ethereum</S.BlockValueTokenInfo>
          </S.TokenInfoBlockTokenInfo>
          <S.Divider />
          <S.TokenInfoBlockTokenInfo>
            <S.BlockTitleTokenInfo>Total Supply</S.BlockTitleTokenInfo>
            <S.BlockValueTokenInfo>10,000,000 (10 Million)</S.BlockValueTokenInfo>
          </S.TokenInfoBlockTokenInfo>
        </S.WrapperTokenInfo>
        <S.StyledTokenomicsPhoto
          src="/images/tokenomics/tokenomics.png"
          alt="tokenomics photo"
          fill
        />
      </S.InnerWrapperTokenomics>
    </Container>
    <S.WrapperPercentages>
      <Title>Buys & Sell Taxes - 5%</Title>
      <Container>
        <S.Percentages>
          <S.TokenInfoBlock>
            <S.BlockTitle>3% — Marketing and User Acquisition</S.BlockTitle>
            <S.BlockValue>
              A more focused approach combining marketing efforts with strategies specifically aimed
              at acquiring new users, thus enhancing community growth and engagement.
            </S.BlockValue>
          </S.TokenInfoBlock>
          <S.VeriticalDivider />
          <S.TokenInfoBlock>
            <S.BlockTitle>1% — Team</S.BlockTitle>
            <S.BlockValue>
              This allocation ensures that we can attract, retain, and adequately compensate top
              talent, essential for our long-term success.
            </S.BlockValue>
          </S.TokenInfoBlock>
          <S.VeriticalDivider />
          <S.TokenInfoBlock>
            <S.BlockTitle>1% — Ecosystem</S.BlockTitle>
            <S.BlockValue>
              This is a multi-faceted allocation that includes: <br />
              <span>RevShare:</span> Continuing our commitment to sharing our success with our
              community.
              <br />
              <span>Buybacks:</span> Tokens bought back are burnt forever.
            </S.BlockValue>
          </S.TokenInfoBlock>
        </S.Percentages>
      </Container>
    </S.WrapperPercentages>
  </S.Wrapper>
);
