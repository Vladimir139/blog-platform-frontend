import React, { FC } from "react";

import {
  ContentMarketingIcon,
  ContestAndPromotionsIcon,
  KoLsInfluencersPartnershipIcon,
  ReferralSystemIcon,
  StrategicPartnershipsIcon,
  TargetedAdvertisingIcon,
} from "@/shared/lib/icons";
import { CellWithDots, Title } from "@/shared/ui/atoms";

import * as S from "./styles";

export const GoToMarketStrategy: FC = () => (
  <S.Wrapper>
    <Title id="gtMarketingStrategy">GO-TO-MARKET STRATEGY</Title>
    <S.SubTitle>Innovative tools/utilities at your fingertip .</S.SubTitle>
    <S.Block>
      <S.DecorImageBackBlur
        src="/images/goToMarket/backBlurGoToMarketCard.png"
        alt="decor image"
        fill
      />
      <S.InfoWrapper>
        <S.LinkGoToMarket href="/">Go-to-Market Strategy</S.LinkGoToMarket>
        <S.Description>
          Cryptory is committed to ensuring widespread adoption of our cutting-edge utilities
          aggregator/marketplace. Our user-friendly platform is backed by a robust marketing
          campaign designed to reach users worldwide and we are willing to share referral income to
          people who promote this to their user-base.
        </S.Description>
      </S.InfoWrapper>
      <S.StyledImage src="/images/decor/rocketGoToMarket.png" alt="decor image" fill />
    </S.Block>
    <S.Initiatives>
      <CellWithDots css={{ height: 131 }} noBorderLeft noDotBottomLeft noDotTopLeft />
      <CellWithDots css={{ height: 131 }}>
        <S.InitiativeText>
          <StrategicPartnershipsIcon /> Strategic Partnerships
        </S.InitiativeText>
      </CellWithDots>
      <CellWithDots css={{ height: 131 }}>
        <S.InitiativeText>
          <TargetedAdvertisingIcon /> Targeted Advertising
        </S.InitiativeText>
      </CellWithDots>
      <CellWithDots css={{ height: 131 }} noBorderRight noDotBottomRight noDotTopRight />
      {/* ---- */}
      <CellWithDots noBorderLeft noDotBottomLeft noDotTopLeft />
      <CellWithDots css={{ height: 131 }}>
        <S.InitiativeText>
          <ReferralSystemIcon /> Referral System
        </S.InitiativeText>
      </CellWithDots>
      <CellWithDots css={{ height: 131 }}>
        <S.InitiativeText>
          <ContestAndPromotionsIcon /> Contest and Promotions
        </S.InitiativeText>
      </CellWithDots>
      <CellWithDots css={{ height: 131 }} noBorderRight noDotBottomRight noDotTopRight />
      {/* ---- */}
      <CellWithDots noBorderLeft noDotBottomLeft noDotTopLeft />
      <CellWithDots css={{ height: 131 }}>
        <S.InitiativeText>
          <ContentMarketingIcon /> Content Marketing
        </S.InitiativeText>
      </CellWithDots>
      <CellWithDots css={{ height: 131 }}>
        <S.InitiativeText>
          <KoLsInfluencersPartnershipIcon /> KOLs/Influencers partnership
        </S.InitiativeText>
      </CellWithDots>
      <CellWithDots css={{ height: 131 }} noBorderRight noDotBottomRight noDotTopRight />
    </S.Initiatives>
    <S.DescriptionInitiatives>
      These initiatives represent just a few facets of our comprehensive marketing strategy. We will
      continually push and work on getting on exchanges and more as we gain more traction and users
      for our products and services.
    </S.DescriptionInitiatives>
  </S.Wrapper>
);
