import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  marginTop: 90,

  position: "relative",
});

export const DecorImageCasesText = styled(Image, {
  top: "-18px !important",
  left: "-20% !important",
  right: "auto !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "1036px !important",
  height: "268px !important",

  "@media(max-width: 900px)": {
    width: "653px !important",
    height: "170px !important",
  },

  "@media(max-width: 530px)": {
    width: "383px !important",
    height: "100px !important",
  },
});

export const DecorImageCasesNloWithStarsAndGlow = styled(Image, {
  top: "auto !important",
  left: "auto !important",
  right: "-33% !important",
  bottom: "-10% !important",

  zIndex: -5,

  width: "1155px !important",
  height: "522px !important",

  "@media(max-width: 900px)": {
    width: "750px !important",
    height: "349px !important",

    bottom: "-10% !important",
  },

  "@media(max-width: 380px)": {
    right: "-45% !important",
  },
});

export const CasesList = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",

  gap: "20px 21px",

  marginTop: 32,

  "@media(max-width: 1190px)": {
    justifyContent: "center",
  },
});
