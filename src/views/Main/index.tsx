import React, { FC } from "react";

import { Container } from "@/shared/ui/atoms";
import {
  CoreValues,
  Faq,
  GoToMarketStrategy,
  MainUseCases,
  Partners,
  PreviewBlock,
  RoadMap,
  Security,
  Statistics,
  Tokenomics,
} from "@/views/Main/lib/ui";

import * as S from "./styles";

export const MainPage: FC = () => (
  <>
    <PreviewBlock />
    <Partners />
    <Statistics />
    <Container>
      <CoreValues />
      <MainUseCases />
    </Container>
    <GoToMarketStrategy />
    <S.Divider />
    <Security />
    <S.Divider />
    <Tokenomics />
    <RoadMap />
    {/* <OurTeam /> */}
    <Faq />
  </>
);
