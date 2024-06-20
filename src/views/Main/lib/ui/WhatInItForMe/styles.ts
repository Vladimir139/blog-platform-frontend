import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  position: "relative",

  width: "100%",
  maxWidth: 1540,

  padding: "0 90px",
  margin: "0 auto",

  "@media(max-width: 1179px)": {
    overflow: "hidden",
  },

  "@media(max-width: 650px)": {
    padding: "0px 20px",
  },
});

export const DecorShadow = styled(Image, {
  width: "1372px !important",
  height: "901px !important",

  top: "-600px !important",
  right: "0 !important",
  left: "auto !important",
  bottom: "auto !important",

  zIndex: "$blockBack",

  "@media(max-width: 1179px)": {
    display: "none",
  },
});

export const Title = styled("h3", {
  textAlign: "center",

  fontSize: "50px",
  fontWeight: 800,
  lineHeight: "52px",

  marginTop: 359,
  marginBottom: 66,

  "@media(max-width: 1140px)": {
    fontSize: "40px",
    lineHeight: "42px",

    marginTop: 162,
    marginBottom: 25,
  },

  "@media(max-width: 670px)": {
    fontSize: "30px",
    lineHeight: "32px",
  },

  "@media(max-width: 580px)": {
    fontSize: "26px",
    lineHeight: "30px",
  },
});

export const AdvantageList = styled("ul", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",

  gap: 20,

  "@media(max-width: 900px)": {
    gridTemplateColumns: "1fr",

    gap: 10,
  },
});

export const Advantage = styled("li", {
  display: "flex",
  alignItems: "center",

  gap: 20,

  width: "100%",

  fontSize: "24px",
  fontWeight: 500,
  lineHeight: "26px",

  backgroundColor: "$block",
  borderRadius: 20,

  padding: "30px",

  "@media(max-width: 1180px)": {
    fontSize: "20px",
    lineHeight: "22px",

    padding: "21px 20px",
  },

  "@media(max-width: 500px)": {
    fontSize: "16px",
    lineHeight: "18px",
  },
});

export const SubTitle = styled("p", {
  fontSize: "32px",
  fontWeight: 500,
  lineHeight: "34px",

  textAlign: "center",
  marginTop: 50,

  "@media(max-width: 600px)": {
    fontSize: "26px",
    lineHeight: "28px",

    marginTop: 25,
  },
});

export const WrapperIcon = styled("div", {
  width: "20%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const WrapperText = styled("div", {
  width: "75%",

  "@media(max-width: 1522px)": {
    whiteSpace: "normal",
  },
});
