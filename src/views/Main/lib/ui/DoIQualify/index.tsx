import React, { FC, useState } from "react";

import {
  AlphaMindShortIcon,
  DiscordIcon,
  DoneIcon,
  LockIcon,
  TelegramIcon,
  XIcon,
} from "@/shared/lib/icons";
import { Button } from "@/shared/ui/atoms";

import * as S from "./styles";

export const DoIQualify: FC = () => {
  const [isMint] = useState(true);

  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <S.WrapperImage>
          <S.StyledImage src="/images/doIQualify/pegasPhoto.png" alt="pegas photo" fill />
          <S.DecorImage src="/images/doIQualify/decorPegasImage.png" alt="pegas photo" fill />
          <S.DecorImageShadow
            src="/images/doIQualify/doIQualifyShadow1.png"
            alt="pegas photo"
            fill
          />
        </S.WrapperImage>
      </S.LeftWrapper>
      <S.RightWrapper>
        {isMint ? (
          <S.InnerWrapperMint>
            <S.TopTitleMint>
              You have an <span>Alpha Mind!</span>
            </S.TopTitleMint>
            <S.Title>Conglaturations</S.Title>
            <S.SubText>You are part of the 1%</S.SubText>
          </S.InnerWrapperMint>
        ) : (
          <>
            <S.Title>Do I Qualify?</S.Title>
            <S.SubText>Only those with an Alpha Mindset can tame the Majestic Unicorn</S.SubText>
          </>
        )}
        <S.BlockList>
          <S.Block isActive={isMint}>
            <S.DoneIconWrapper isActive={isMint}>
              <DoneIcon />
            </S.DoneIconWrapper>
            <S.IconWrapper>
              <AlphaMindShortIcon />
            </S.IconWrapper>
            <S.BlockText>Register your AlphaMind profile</S.BlockText>
          </S.Block>
          <S.Block isActive={isMint}>
            <S.DoneIconWrapper isActive={isMint}>
              <DoneIcon />
            </S.DoneIconWrapper>
            <S.IconWrapper>
              <DiscordIcon size="medium" />
            </S.IconWrapper>
            <S.BlockText>Login and Verify</S.BlockText>
          </S.Block>
          <S.Block isActive={isMint}>
            <S.DoneIconWrapper isActive={isMint}>
              <DoneIcon />
            </S.DoneIconWrapper>
            <S.IconWrapper>
              <TelegramIcon />
            </S.IconWrapper>
            <S.BlockText>Login and Verify</S.BlockText>
          </S.Block>
          <S.Block isActive={isMint}>
            <S.DoneIconWrapper isActive={isMint}>
              <DoneIcon />
            </S.DoneIconWrapper>
            <S.IconWrapper>
              <XIcon />
            </S.IconWrapper>
            <S.BlockText>Login and Follow</S.BlockText>
          </S.Block>
        </S.BlockList>
        <Button stretch disabled={!isMint}>
          <S.InnerWrapBtn>
            {!isMint && <LockIcon />} {!isMint ? "Complete the tasks" : <span>MINT NOW</span>}
          </S.InnerWrapBtn>
        </Button>
        <S.LittleSubText>powered by claimr / alphaquest & cryptodo</S.LittleSubText>
      </S.RightWrapper>
    </S.Wrapper>
  );
};
