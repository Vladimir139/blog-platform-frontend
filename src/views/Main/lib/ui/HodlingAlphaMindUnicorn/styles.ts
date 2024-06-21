import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  position: "relative",

  width: "100%",

  background: "$radialGradient",

  padding: "40px 0 40px 80px",

  borderRadius: 20,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  marginTop: 270,

  "@media(max-width: 1100px)": {
    padding: "20px 0 20px 30px",
  },

  "@media(max-width: 764px)": {
    marginTop: 124,
  },

  "@media(max-width: 380px)": {
    padding: "15px 0 15px 15px",
  },
});

export const LeftWrapper = styled("div", {
  maxWidth: "65%",

  "@media(max-width: 1300px)": {
    maxWidth: "54%",
  },

  "@media(max-width: 1100px)": {
    maxWidth: "50%",
  },

  "@media(max-width: 950px)": {
    maxWidth: "43%",
  },

  "@media(max-width: 830px)": {
    maxWidth: "38%",
  },
});

export const AccentText = styled("p", {
  fontSize: "50px",
  lineHeight: "52px",
  fontWeight: 800,

  marginBottom: 20,

  "& span": {
    fontWeight: 700,
    color: "#FFC5C1",
  },

  "@media(max-width: 1100px)": {
    fontSize: "40px",
    lineHeight: "42px",
  },

  "@media(max-width: 950px)": {
    fontSize: "30px",
    lineHeight: "32px",
  },

  "@media(max-width: 750px)": {
    fontSize: "22px",
    lineHeight: "24px",
  },

  "@media(max-width: 430px)": {
    fontSize: "18px",
    lineHeight: "20px",
  },
});

export const SubText = styled("p", {
  fontSize: "32px",
  lineHeight: "34px",
  fontWeight: 500,

  "@media(max-width: 1100px)": {
    fontSize: "24px",
    lineHeight: "26px",
  },

  "@media(max-width: 950px)": {
    fontSize: "18px",
    lineHeight: "20px",
  },

  "@media(max-width: 750px)": {
    fontSize: "14px",
    lineHeight: "16px",
  },

  "@media(max-width: 430px)": {
    fontSize: "12px",
    lineHeight: "14px",
  },
});

export const StyledImage = styled(Image, {
  width: "auto !important",
  height: "auto !important",

  maxWidth: 420,
  maxHeight: 330,

  top: "auto !important",
  left: "auto !important",
  bottom: "0px !important",
  right: "46px !important",

  "@media(max-width: 950px)": {
    right: "0px !important",
  },

  "@media(max-width: 750px)": {
    maxWidth: 305,
    maxHeight: 326,
  },

  "@media(max-width: 530px)": {
    maxWidth: 335,
  },

  "@media(max-width: 450px)": {
    maxWidth: 284,
    maxHeight: 306,
  },

  "@media(max-width: 430px)": {
    maxWidth: 264,
    maxHeight: 276,
  },

  "@media(max-width: 380px)": {
    maxWidth: 185,
    maxHeight: 206,
  },
});
