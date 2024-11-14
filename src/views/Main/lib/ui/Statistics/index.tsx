import React, { FC } from "react";
import CountUp from "react-countup";
import { useMedia } from "react-use";

import * as S from "./styles";

export const Statistics: FC = () => {
  const isMobile = useMedia("(max-width: 1190px)", false);

  return (
    <S.Wrapper>
      {isMobile && (
        <S.DecorImageRubinGlow
          position={1}
          src="/images/decor/rubinGlow.png"
          alt="decor image"
          fill
        />
      )}
      <S.StatisticBlock>
        <S.Number>
          <CountUp end={1000} duration={2.5} />+
        </S.Number>
        <S.Description>Product users</S.Description>
      </S.StatisticBlock>
      <S.VerticalDivider>
        <S.DecorImageRubinGlow
          position={1}
          src="/images/decor/rubinGlow.png"
          alt="decor image"
          fill
        />
      </S.VerticalDivider>
      <S.StatisticBlock>
        <S.Number>
          <CountUp end={100} duration={2.5} />+
        </S.Number>
        <S.Description>Utilities listed</S.Description>
      </S.StatisticBlock>
      <S.VerticalDivider>
        <S.DecorImageRubinGlow
          position={2}
          src="/images/decor/rubinGlow.png"
          alt="decor image"
          fill
        />
      </S.VerticalDivider>
      <S.StatisticBlock>
        <S.Number>
          <CountUp end={50} duration={2.5} />+
        </S.Number>
        <S.Description>Communities added</S.Description>
      </S.StatisticBlock>
      <S.VerticalDivider>
        <S.DecorImageRubinGlow
          position={3}
          src="/images/decor/rubinGlow.png"
          alt="decor image"
          fill
        />
      </S.VerticalDivider>
      <S.StatisticBlock>
        <S.Number>
          $<CountUp end={25000} duration={2.5} />
        </S.Number>
        <S.Description>Total trading volume</S.Description>
      </S.StatisticBlock>
    </S.Wrapper>
  );
};
