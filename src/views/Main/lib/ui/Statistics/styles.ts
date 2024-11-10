import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",

  background: "#010123",

  gap: 17,

  width: "100%",
  maxWidth: 1280,

  padding: "113px 86px 69px 104px",
  margin: "0 auto",

  "@media(max-width: 1190px)": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",

    padding: "113px 46px 69px 64px",
  },

  "@media(max-width: 750px)": {
    padding: "113px 26px 69px 44px",
  },

  "@media(max-width: 650px)": {
    padding: "70px 26px 69px 26px",

    gridTemplateColumns: "1fr",

    gap: 30,
  },
});

export const StatisticBlock = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  gap: 15,
});

export const Number = styled("p", {
  fontSize: 51,
  lineHeight: "53px",
  fontWeight: 400,

  textAlign: "center",
  background: "linear-gradient(85.75deg, #0081FF 3.46%, #BC90EE 88.6%)",
  color: "transparent",
  "-webkit-background-clip": "text",
  "background-clip": "text",

  "@media(max-width: 840px)": {
    fontSize: 41,
    lineHeight: "43px",
  },

  "@media(max-width: 650px)": {
    fontSize: 35,
    lineHeight: "37px",
  },
});

export const Description = styled("p", {
  fontSize: 16,
  lineHeight: "18px",
  fontWeight: 400,

  textAlign: "center",

  color: "#FFFFFF66",
});

export const VerticalDivider = styled("div", {
  width: 1,
  height: 104,

  position: "relative",

  backgroundColor: "#2B2B54",

  "@media(max-width: 1190px)": {
    display: "none",
  },
});

export const DecorImageRubinGlow = styled(Image, {
  top: "auto !important",
  left: "auto !important",
  right: "auto !important",
  bottom: "auto !important",

  zIndex: 0,

  opacity: 0.51,

  width: "525px !important",
  height: "346px !important",

  variants: {
    position: {
      1: {
        top: "-100% !important",
        transform: "translateX(-80%)",
      },
      2: {
        top: "-100% !important",
        transform: "translateX(-60%)",
      },
      3: {
        top: "-100% !important",
        transform: "translateX(-45%)",
      },
    },
  },
});
