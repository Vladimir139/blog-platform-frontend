import React, { FC } from "react";

import { DiscordIcon, TelegramIcon, XIcon } from "@/shared/lib/icons";

import * as S from "./styles";

export const JoinOurCommunity: FC = () => (
  <S.Wrapper>
    <S.TextWrapper>
      <span>Join our community</span> and be welcomed by like-minded Alpha hunters
    </S.TextWrapper>
    <S.SocialNetworkList>
      <S.SocialNetwork>
        <S.StyledLink href="/" type="discord">
          <DiscordIcon />
        </S.StyledLink>
      </S.SocialNetwork>
      <S.SocialNetwork>
        <S.StyledLink href="/" type="telegram">
          <TelegramIcon size="medium" />
        </S.StyledLink>
      </S.SocialNetwork>
      <S.SocialNetwork>
        <S.StyledLink href="/" type="x">
          <XIcon size="medium" />
        </S.StyledLink>
      </S.SocialNetwork>
    </S.SocialNetworkList>
  </S.Wrapper>
);
