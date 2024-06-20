import React, { FC } from "react";
import { useMedia } from "react-use";

import * as S from "./styles";

export const HodlingAlphaMindUnicorn: FC = () => {
  const isMobile = useMedia("(max-width: 500px)", false);

  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <S.AccentText>
          Hodling <span>a AlphaMind Unicorn boosts your KARMA</span>
        </S.AccentText>
        <S.SubText>Build your KARMA, expand your $MIND</S.SubText>
      </S.LeftWrapper>
      <S.StyledImage
        src={
          isMobile
            ? "/images/hodlingAlphaMindUnicorn/mobilePegas.png"
            : "/images/hodlingAlphaMindUnicorn/smallPegas.png"
        }
        alt="small pegas photo"
        fill
      />
    </S.Wrapper>
  );
};
