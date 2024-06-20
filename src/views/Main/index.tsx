import React, { FC } from "react";

import { Container } from "@/shared/ui/atoms";
import {
  DoIQualify,
  Faq,
  GuardianOfWeb3Freedom,
  HodlingAlphaMindUnicorn,
  JoinOurCommunity,
  NeedHelp,
  PreviewBlock,
  StayConnected,
  WhatInItForMe,
} from "@/views/Main/lib/ui";

export const MainPage: FC = () => (
  <>
    <PreviewBlock />
    <Container>
      <GuardianOfWeb3Freedom />
      <WhatInItForMe />
      <HodlingAlphaMindUnicorn />
    </Container>
    <DoIQualify />
    <Container>
      <NeedHelp />
      <JoinOurCommunity />
      <Faq />
      {/* <StayConnected /> */}
    </Container>
  </>
);
