import Image from "next/image";
import Link from "next/link";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  display: "flex",
  alignItem: "center",
  justifyContent: "space-between",

  overflow: "hidden",

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
    padding: "20px",
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
});

export const DecorImageBigGlow = styled(Image, {
  top: "0 !important",
  left: "auto !important",
  right: "-27% !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "800px !important",
  height: "672px !important",
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
  fontSize: 30,
  lineHeight: "26px",
  fontWeight: 700,

  marginBottom: 26,

  "@media(max-width: 900px)": {
    textAlign: "center",
  },

  "@media(max-width: 550px)": {
    fontSize: 23,
    lineHeight: "25px",
  },
});

export const Description = styled("p", {
  fontSize: 16,
  lineHeight: "26px",
  fontWeight: 400,

  color: "#FFFFFF99",

  marginBottom: 32,

  "@media(max-width: 900px)": {
    textAlign: "center",
  },

  "@media(max-width: 550px)": {
    fontSize: 14,
    lineHeight: "22px",
  },
});

export const LinkLearnMore = styled(Link, {
  width: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  textDecoration: "none",
  padding: 16,

  background: "inherit",

  position: "relative",

  "&::before": {
    content: "",
    position: "absolute",
    inset: 0,

    borderRadius: "50px",
    padding: "1px",
    background: "linear-gradient(88.88deg, #6A6AA9 25.29%, #7154F0 93.65%)",

    "-webkit-mask": "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    "-webkit-mask-composite": "xor",
    maskComposite: "exclude",
  },

  "@media(max-width: 900px)": {
    maxWidth: 300,

    margin: "0 auto",
  },
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
