import React, { FC } from "react";
import { useMedia } from "react-use";

import { WarningIcon } from "@/shared/lib/icons";
import { Button } from "@/shared/ui/atoms";

import * as S from "./styles";

export const PreviewBlock: FC = () => {
  const isTabletWarning = useMedia("(max-width: 1521px)", false);
  const isMobileWarning = useMedia("(max-width: 969px)", false);

  return (
    <S.WrapperPreview>
      <S.BlocksWrapper>
        <S.LeftWrapper>
          <S.WrapperInfoBlock>
            <S.Title>
              Unleash your <br />
              <S.WordGradient>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alpha</S.WordGradient> Power
            </S.Title>
            <S.Description>
              Mint the legendary White Steed and embark on a journey of empowerment and opportunity
              with AlphaMind.
            </S.Description>
            <Button>
              <S.TextButton>
                Claim your <span>FREE STED</span>
              </S.TextButton>
            </Button>
          </S.WrapperInfoBlock>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.StyledImage src="/images/previewBlock/pegasWithDecor.png" alt="" fill />
        </S.RightWrapper>
      </S.BlocksWrapper>
      {isTabletWarning ? (
        <S.WarningInfoBlock>
          <S.TopWrapper>
            <S.CircleIcon>
              <WarningIcon isSmall={isMobileWarning} />
            </S.CircleIcon>
            <S.DecorLine />
          </S.TopWrapper>
          <S.BottomWrapper>
            <S.WarningText>PROCEED WITH CAUTION!</S.WarningText>
            <S.WarningDescription>
              Owning a AlphaMind Unicorn symbolizes your commitment to pushing the boundaries of
              what is possible and your readiness to seize new opportunities within the Web3 space.
            </S.WarningDescription>
          </S.BottomWrapper>
        </S.WarningInfoBlock>
      ) : (
        <S.WarningInfoBlock>
          <S.TopWrapper>
            <S.DecorLine />
          </S.TopWrapper>
          <S.BottomWrapper>
            <S.LeftWrapperWarning>
              <S.CircleIcon>
                <WarningIcon />
              </S.CircleIcon>
            </S.LeftWrapperWarning>
            <S.RightWrapperWarning>
              <S.WarningText>PROCEED WITH CAUTION!</S.WarningText>
              <S.WarningDescription>
                Owning a AlphaMind Unicorn symbolizes your commitment to pushing the boundaries of
                what is possible and your readiness to seize new opportunities within the Web3
                space.
              </S.WarningDescription>
            </S.RightWrapperWarning>
          </S.BottomWrapper>
        </S.WarningInfoBlock>
      )}
    </S.WrapperPreview>
  );
};
