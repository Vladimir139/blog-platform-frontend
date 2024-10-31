import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  margin: "75px",

  position: "relative",

  "@media(max-width: 450px)": {
    margin: "75px 40px",
  },
});

export const DecorImageBlueGlowOval = styled(Image, {
  top: "-240px !important",
  left: "-310px !important",
  right: "auto !important",
  bottom: "auto !important",

  zIndex: 1,

  width: "894px !important",
  height: "1078px !important",
});

export const DecorImageRubinGlow = styled(Image, {
  top: "auto !important",
  left: "auto !important",
  right: "-150px !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "732px !important",
  height: "600px !important",
});

export const SecuritiesLogoList = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",

  gap: 20,

  width: "100%",
  maxWidth: 952,

  margin: "79px auto 131px",

  "@media(max-width: 1004px)": {
    justifyContent: "center",
    gap: 70,
  },

  "@media(max-width: 445px)": {
    gap: 40,

    margin: "39px auto 91px",
  },
});

export const SecurityLogo = styled(Image, {
  position: "relative !important",

  variants: {
    security: {
      assureDefi: {
        width: "309px !important",
        height: "131px !important",

        "@media(max-width: 445px)": {
          width: "199px !important",
          height: "84px !important",
        },
      },
      blockSafu: {
        width: "372px !important",
        height: "103px !important",

        "@media(max-width: 445px)": {
          width: "257px !important",
          height: "72px !important",
        },
      },
      sp: {
        width: "132px !important",
        height: "132px !important",

        "@media(max-width: 445px)": {
          width: "89px !important",
          height: "90px !important",
        },
      },
    },
  },

  // "@media(max-width: 1279px)": {
  // },
});
