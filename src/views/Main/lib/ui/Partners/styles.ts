import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  background: "#010123",
  borderBottom: "1px solid #FFFFFF1A",

  height: 70,
});

export const PartnerImg = styled(Image, {
  position: "relative !important",

  margin: "15px 40px",

  opacity: 0.5,
  height: "40px !important",

  variants: {
    partner: {
      ens: {
        width: "81px !important",
        height: "32px !important",
      },
      beatyShield: {
        width: "28px !important",
      },
      bg: {
        width: "43px !important",
      },
      blackHeroFace: {
        width: "45px !important",
      },
      bot: {
        width: "33px !important",
      },
      bot2: {
        width: "38px !important",
      },
      copilot: {
        width: "32px !important",
      },
      cryptodo: {
        width: "40px !important",
      },
      figure: {
        width: "45px !important",
      },
      goalInBot: {
        width: "40px !important",
      },
      lp: {
        width: "41px !important",
      },
      mInGoal: {
        width: "40px !important",
      },
      mLines: {
        width: "39px !important",
      },
      niceGirl: {
        width: "36px !important",
      },
      ox: {
        width: "60px !important",
      },
      readySwap: {
        width: "50px !important",
      },
      shield: {
        width: "34px !important",
      },
      spydefi: {
        width: "40px !important",
      },
      transformer: {
        width: "41px !important",
      },
      treasury: {
        width: "40px !important",
      },
      unibot: {
        width: "37px !important",
      },
    },
  },
});
