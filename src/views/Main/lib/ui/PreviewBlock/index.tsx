import { motion } from "framer-motion";
import React, { FC } from "react";

import { Button } from "@/shared/ui/atoms";

import * as S from "./styles";

export const PreviewBlock: FC = () => (
  <S.Wrapper>
    <S.WrapperGlowsLeftBottom>
      <S.RedRadial />
      <S.RedAndWhiteRadial />
      <S.LightBlueRadial />
      <S.BlueRadial />
      <S.SmallBlueRadial />
      <S.PinkRadial />
      <S.LeftBottomLines src="/images/preview/leftBottomLines.png" alt="decor lines" fill />
      <S.SmallPink1Radial />
      <S.SmallPink2Radial />
      <S.SmallPinkVector1Radial />
    </S.WrapperGlowsLeftBottom>
    <S.WrapperGlowsRightTop>
      <S.RedRadial isTopRight />
      <S.RedAndWhiteRadial isTopRight />
      <S.LightBlueRadial isTopRight />
      <S.BlueRadial isTopRight />
      <S.SmallBlueRadial isTopRight />
      <S.PinkRadial isTopRight />
      <S.LeftBottomLines
        isTopRight
        src="/images/preview/leftBottomLines.png"
        alt="decor lines"
        fill
      />
      <S.SmallPink1Radial isTopRight />
      <S.SmallPink2Radial isTopRight />
      <S.SmallPinkVector1Radial isTopRight />
    </S.WrapperGlowsRightTop>
    <S.DecorImageBigGlow src="/images/preview/previewBigGlow.png" alt="decor image" fill />
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <S.Title>Navigating the whole web3 and AI innovation from one app</S.Title>
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
      <S.Description>
        Unlock the power of KOL copy trading, deep analytics and advanced utilities with Cryptory
        <S.DecorImageRubinGlow src="/images/decor/rubinGlow.png" alt="decor image" fill />
      </S.Description>
    </motion.div>
    <motion.div
      style={{ width: "100%" }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <S.ButtonsList>
        <Button
          theme="purple"
          stretch
          onClick={() => window.open("https://t.me/CryptoryAI_bot", "_blank")}
        >
          <div style={{ position: "relative", zIndex: 4 }}>Launch DApp</div>
        </Button>
        <Button theme="dark" stretch>
          <span>Buy on Uniswap</span>
        </Button>
      </S.ButtonsList>
    </motion.div>
  </S.Wrapper>
);
