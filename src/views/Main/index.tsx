import React, { FC } from "react";

import { Container } from "@/shared/ui/atoms";
import {
  CoreValues,
  Faq,
  GoToMarketStrategy,
  MainUseCases,
  OurTeam,
  Partners,
  PreviewBlock,
  RoadMap,
  Security,
  Statistics,
  Tokenomics,
} from "@/views/Main/lib/ui";

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
    <Security />
    <Tokenomics />
    <RoadMap />
    <OurTeam />
    <Faq />
  </>
);
