import React, { FC } from "react";

import { DiscordIcon, TelegramIcon, WhiteLogo, XIcon } from "@/shared/lib/icons";

import * as S from "./styles";

export const StayConnected: FC = () => (
  <S.Wrapper>
    <WhiteLogo />
    <S.WrapperInfo>
      <S.TitleInfo>Stay Connected with AlphaMind</S.TitleInfo>
      <S.DescriptionInfo>
        Join our community for the latest AlphaMind news, opportunities, and insights. Follow us on
        social media to connect with innovators, get real-time updates, and shape the future of
        web3.
      </S.DescriptionInfo>
    </S.WrapperInfo>
    <S.SocialNetworkList>
      <S.SocialNetworkLink href="/">
        <TelegramIcon size="small" />
      </S.SocialNetworkLink>
      <S.SocialNetworkLink href="/">
        <XIcon size="small" />
      </S.SocialNetworkLink>
      <S.SocialNetworkLink href="/">
        <DiscordIcon size="small" />
      </S.SocialNetworkLink>
    </S.SocialNetworkList>
    <S.ReportBtn>Subscribe to the Alpha Report</S.ReportBtn>
  </S.Wrapper>
);
