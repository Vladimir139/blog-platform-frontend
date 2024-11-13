import { motion } from "framer-motion";
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
    <S.SubTitle>Accelerating Web3 adoption with Cryptory</S.SubTitle>
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
              <S.TitleCoreValues>Dynamic growth</S.TitleCoreValues>
              <S.Description>
                Cryptory is dedicated to driving the global adoption of our advanced Web3 utilities
                aggregator and innovative trading tools. Our intuitive platform is supported by a
                comprehensive marketing strategy aimed at reaching users worldwide, empowering
                everyone to tap into Web3 with ease. We actively collaborate with KOLs and offer
                referral incentives, sharing income with those who promote Cryptory within their
                networks, expanding our community and impact together.
              </S.Description>
              <S.WrapperButton>
                <Button
                  stretch
                  theme="purple"
                  css={{ marginTop: 10 }}
                  onClick={() => window.open("https://t.me/CryptoryAI_bot", "_blank")}
                >
                  <div style={{ position: "relative", zIndex: 4 }}>Launch DApp</div>
                </Button>
              </S.WrapperButton>
            </S.InfoWrapper>
          </S.InnerBlockWrapper>
          {/* <S.StyledImage src="/images/decor/rocketGoToMarket.png" alt="decor image" fill /> */}
          <motion.div
            style={{ zIndex: 2 }}
            initial={{ x: 0, y: 0 }}
            animate={{
              x: [-30, 0],
              y: [0, 30],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse", // Плавное возвращение
            }}
          >
            <S.StyledImage src="/images/decor/rocketGoToMarket.png" alt="decor image" fill />
          </motion.div>
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
            <ContestAndPromotionsIcon /> Contests and promotions
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
      These initiatives are just a few aspects of our comprehensive marketing strategy. We are
      committed to continuously expanding our efforts, including securing exchange listings and
      more, as we gain greater traction and attract more users to our products and services
    </S.DescriptionInitiatives>
  </S.Wrapper>
);
