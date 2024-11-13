import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  display: "flex",
  alignItem: "center",
  justifyContent: "space-between",

  overflow: "hidden",
  zIndex: 3,
  backgroundColor: "#010123",

  padding: "63px 113px 63px 73px",

  gap: 20,

  position: "relative",

  border: "1px solid #8080B754",

  borderRadius: 20,

  "@media(max-width: 1024px)": {
    padding: "33px",
  },

  "@media(max-width: 900px)": {
    flexDirection: "column-reverse",
  },

  "@media(max-width: 550px)": {
    padding: "20px 10px 35px",

    gap: 0,
  },
});

export const DecorImageRubinGlow = styled(Image, {
  top: "-5% !important",
  left: "auto !important",
  right: "0 !important",
  bottom: "auto !important",

  zIndex: -4,

  width: "732px !important",
  height: "600px !important",

  "@media(max-width: 450px)": {
    display: "none",
  },
});

export const DecorImageBigGlow = styled(Image, {
  top: "0 !important",
  left: "auto !important",
  right: "-27% !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "800px !important",
  height: "672px !important",

  "@media(max-width: 450px)": {
    display: "none",
  },
});

export const WrapperInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItem: "center",
  justifyContent: "center",

  maxWidth: 415,

  "@media(max-width: 900px)": {
    maxWidth: "100%",
  },
});

export const Title = styled("h3", {
  fontSize: 48,
  lineHeight: "75px",
  fontWeight: 400,

  textAlign: "center",
  background: "linear-gradient(93.29deg, #FFFFFF 0.6%, #7217DA 127.89%)",
  color: "transparent",
  "-webkit-background-clip": "text",
  "background-clip": "text",

  "@media(max-width: 900px)": {
    textAlign: "center",
  },

  "@media(max-width: 550px)": {
    fontSize: 36,
    lineHeight: "75px",
  },
});

export const Description = styled("p", {
  fontSize: 16,
  lineHeight: "26px",
  fontWeight: 400,

  color: "#FFFFFF99",

  marginBottom: 32,
  textAlign: "center",

  "@media(max-width: 550px)": {
    fontSize: 14,
    lineHeight: "22px",
  },
});

export const WrapperButton = styled("div", {
  width: "100%",
  maxWidth: 210,

  margin: "0 auto",
});

export const DecorImage = styled(Image, {
  position: "relative !important",

  width: "300px !important",
  height: "348px !important",

  "@media(max-width: 900px)": {
    margin: "0 auto",
  },

  "@media(max-width: 550px)": {
    width: "213px !important",
    height: "247px !important",
  },
});
