import React, { FC } from "react";

import {
  ContentMarketingIcon,
  ContestAndPromotionsIcon,
  KoLsInfluencersPartnershipIcon,
  ReferralSystemIcon,
  StrategicPartnershipsIcon,
  TargetedAdvertisingIcon,
} from "@/shared/lib/icons";
import { Button, Title } from "@/shared/ui/atoms";

import * as S from "./styles";

export const GoToMarketStrategy: FC = () => (
  <S.Wrapper>
    <Title id="gtMarketingStrategy">GO-TO-MARKET STRATEGY</Title>
    <S.SubTitle>Innovative tools/utilities at your fingertip.</S.SubTitle>
    <S.WrapperBlock>
      <S.Block>
        <S.WrapperCoreValues>
          <S.InnerBlockWrapper>
            <S.DecorImageBackBlur
              src="/images/goToMarket/backBlurGoToMarketCard.png"
              alt="decor image"
              fill
            />
            <S.InfoWrapper>
              <S.TitleCoreValues>CORE VALUES</S.TitleCoreValues>
              <S.Description>
                Cryptory is committed to ensuring widespread adoption of our cutting-edge utilities
                aggregator/marketplace. Our user-friendly platform is backed by a robust marketing
                campaign designed to reach users worldwide and we are willing to share referral
                income to people who promote this to their user-base.
              </S.Description>
              <S.WrapperButton>
                <Button
                  stretch
                  theme="purple"
                  css={{ marginTop: 10 }}
                  onClick={() => window.open("https://t.me/CryptoryAI_bot", "_blank")}
                >
                  <div style={{ position: "relative", zIndex: 4 }}>Open dashboard</div>
                </Button>
              </S.WrapperButton>
            </S.InfoWrapper>
          </S.InnerBlockWrapper>
          <S.StyledImage src="/images/decor/rocketGoToMarket.png" alt="decor image" fill />
        </S.WrapperCoreValues>
        <S.InitiativesBlock>
          <S.InitiativeText>
            <StrategicPartnershipsIcon /> Strategic Partnerships
          </S.InitiativeText>
          <S.InitiativeText>
            <TargetedAdvertisingIcon /> Targeted Advertising
          </S.InitiativeText>
          <S.InitiativeText>
            <ReferralSystemIcon /> Referral System
          </S.InitiativeText>
          <S.InitiativeText>
            <ContestAndPromotionsIcon /> Contest and Promotions
          </S.InitiativeText>
          <S.InitiativeText>
            <ContentMarketingIcon /> Content Marketing
          </S.InitiativeText>
          <S.InitiativeText>
            <KoLsInfluencersPartnershipIcon /> KOLs/Influencers partnership
          </S.InitiativeText>
        </S.InitiativesBlock>
        <S.StyledPlanet src="/images/goToMarket/planet3.png" alt="planet photo" fill />
      </S.Block>
    </S.WrapperBlock>
    <S.DescriptionInitiatives>
      These initiatives represent just a few facets of our comprehensive marketing strategy. We will
      continually push and work on getting on exchanges and more as we gain more traction and users
      for our products and services.
    </S.DescriptionInitiatives>
  </S.Wrapper>
);
