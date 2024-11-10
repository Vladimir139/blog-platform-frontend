import React, { FC } from "react";

import { TelegramIcon } from "@/shared/lib/icons/SocialNetworks";
import { WhiteGitHubIcon } from "@/shared/lib/icons/SocialNetworks/WhiteGitHubIcon";
import { WhiteTelegramIcon } from "@/shared/lib/icons/SocialNetworks/WhiteTelegramIcon";
import { WhiteTwitterIcon } from "@/shared/lib/icons/SocialNetworks/WhiteTwitterIcon";
import { WhiteYouTubeIcon } from "@/shared/lib/icons/SocialNetworks/WhiteYouTubeIcon";

import * as S from "./styles";

export const Footer: FC = () => (
  <S.Footer>
    <S.InnerFooterWrapper>
      <S.TopWrapper>
        <S.LeftWrapper>
          <S.StyledCryptoryLogo
            src="/images/common/CryptoryLogoMedium.png"
            alt="cryptory logo"
            fill
          />
          <S.Description>
            Cryptory is the first Multi Industry AI Website Builder powered entirely through
            Telegram.
          </S.Description>
          <S.UseItOnTelegramLink href="https://t.me/CryptoryAI_bot">
            <TelegramIcon />
            <S.InfoTgLinkWrap>
              <S.LinkText>USE IT ON</S.LinkText>
              <S.LinkTextBig>Telegram</S.LinkTextBig>
            </S.InfoTgLinkWrap>
          </S.UseItOnTelegramLink>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.BlockLinks>
            <S.TitleLinks>Quick links</S.TitleLinks>
            <S.ListLinks>
              <S.StyledLink href="/">About Us</S.StyledLink>
              <S.StyledLink href="/">Features</S.StyledLink>
              <S.StyledLink href="/">KYC</S.StyledLink>
              <S.StyledLink href="/">Token</S.StyledLink>
            </S.ListLinks>
          </S.BlockLinks>
          <S.BlockLinks>
            <S.TitleLinks>Support</S.TitleLinks>
            <S.ListLinks>
              <S.StyledLink href="/">GitBook</S.StyledLink>
              <S.StyledLink href="/">Bot</S.StyledLink>
              <S.StyledLink href="/">FAQs</S.StyledLink>
            </S.ListLinks>
          </S.BlockLinks>
        </S.RightWrapper>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.Copyrite>
          Cryptory LLC, 131 Continental Drive Suite 305, <br /> Newark, New Castle, Delaware 19713
        </S.Copyrite>
        <S.Copyrite>© 2024 All Rights Reserved By Cryptory</S.Copyrite>
        <S.SocialNetworksList>
          <S.SocialNetwork href="https://t.me/CryptoryAI_bot">
            <WhiteTelegramIcon />
          </S.SocialNetwork>
          <S.SocialNetwork href="/">
            <WhiteTwitterIcon />
          </S.SocialNetwork>
          <S.SocialNetwork href="/">
            <WhiteGitHubIcon />
          </S.SocialNetwork>
          <S.SocialNetwork href="/">
            <WhiteYouTubeIcon />
          </S.SocialNetwork>
        </S.SocialNetworksList>
      </S.BottomWrapper>
    </S.InnerFooterWrapper>
  </S.Footer>
);
