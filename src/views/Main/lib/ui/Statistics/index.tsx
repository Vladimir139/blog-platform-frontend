import React, { FC } from "react";
import CountUp from "react-countup";

import { Container } from "@/shared/ui/atoms";

import * as S from "./styles";

export const Statistics: FC = () => (
  <Container>
    <S.Wrapper>
      <S.StatisticBlock>
        <S.Number>
          <CountUp end={100000} duration={2.5} />+
        </S.Number>
        <S.Description>communities</S.Description>
      </S.StatisticBlock>
      <S.StatisticBlock>
        <S.Number>
          <CountUp end={100} duration={2.5} />+
        </S.Number>
        <S.Description>Utilities listed out of 10,000+ available</S.Description>
      </S.StatisticBlock>
      <S.StatisticBlock>
        <S.Number>
          <CountUp end={400000000} duration={2.5} />+
        </S.Number>
        <S.Description>Web3 users target.</S.Description>
      </S.StatisticBlock>
      <S.StatisticBlock>
        <S.Number>
          $<CountUp end={10000000} duration={2.5} />+
        </S.Number>
        <S.Description>Web3 Utilities TVL servicing</S.Description>
      </S.StatisticBlock>
    </S.Wrapper>
  </Container>
);
