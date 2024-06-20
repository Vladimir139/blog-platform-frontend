import React, { FC } from "react";

import { AlphaMindShortIcon, DiscordIcon, LockIcon, TelegramIcon, XIcon } from "@/shared/lib/icons";
import { Button } from "@/shared/ui/atoms";

import * as S from "./styles";

export const DoIQualify: FC = () => (
  <S.Wrapper>
    <S.LeftWrapper>
      <S.WrapperImage>
        <S.StyledImage src="/images/doIQualify/pegasPhoto.png" alt="pegas photo" fill />
        <S.DecorImage src="/images/doIQualify/decorPegasImage.png" alt="pegas photo" fill />
      </S.WrapperImage>
    </S.LeftWrapper>
    <S.RightWrapper>
      <S.Title>Do I Qualify?</S.Title>
      <S.SubText>Only those with an Alpha Mindset can tame the Majestic Unicorn</S.SubText>
      <S.BlockList>
        <S.Block>
          <S.IconWrapper>
            <AlphaMindShortIcon />
          </S.IconWrapper>
          <S.BlockText>Register your AlphaMind profile</S.BlockText>
        </S.Block>
        <S.Block>
          <S.IconWrapper>
            <DiscordIcon size="medium" />
          </S.IconWrapper>
          <S.BlockText>Login and Verify</S.BlockText>
        </S.Block>
        <S.Block>
          <S.IconWrapper>
            <TelegramIcon />
          </S.IconWrapper>
          <S.BlockText>Login and Verify</S.BlockText>
        </S.Block>
        <S.Block>
          <S.IconWrapper>
            <XIcon />
          </S.IconWrapper>
          <S.BlockText>Login and Follow</S.BlockText>
        </S.Block>
      </S.BlockList>
      <Button stretch disabled>
        <S.InnerWrapBtn>
          <LockIcon /> Complete the tasks
        </S.InnerWrapBtn>
      </Button>
      <S.LittleSubText>powered by claimr / alphaquest & cryptodo</S.LittleSubText>
    </S.RightWrapper>
  </S.Wrapper>
);
