import { motion } from "framer-motion";
import React, { FC } from "react";

import { Title } from "@/shared/ui/atoms";

import * as S from "./styles";

export const Security: FC = () => (
  <S.Wrapper>
    <S.DecorImageBlueGlowOval src="/images/security/blueGlowOval.png" alt="decor image" fill />
    <S.DecorImageRubinGlow src="/images/decor/rubinGlow.png" alt="decor image" fill />
    <Title subTitle="We are proud to announce that we have been fully KYC verified by the trusted:">
      Security
    </Title>
    <S.SecuritiesLogoList>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <S.SecurityLogo
          security="assureDefi"
          src="/images/security/assureDefiDark2.png"
          alt="security logo"
          fill
        />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <S.SecurityLogo
          security="blockSafu"
          src="/images/security/blockSafuDark2.png"
          alt="security logo"
          fill
        />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <S.SecurityLogo security="sp" src="/images/security/spDark2.png" alt="security logo" fill />
      </motion.div>
    </S.SecuritiesLogoList>
  </S.Wrapper>
);
