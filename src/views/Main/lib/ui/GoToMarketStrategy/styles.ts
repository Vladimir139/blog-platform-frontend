import Image from "next/image";
import Link from "next/link";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  marginTop: 165,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",

  position: "relative",
});

export const DecorImageBackBlur = styled(Image, {
  top: "-150px !important",
  left: "0 !important",
  right: "auto !important",
  bottom: "auto !important",

  zIndex: 1,

  width: "510px !important",
  height: "360px !important",

  "@media(max-width: 830px)": {
    top: "-200px !important",
    left: "-100px !important",
  },

  "@media(max-width: 420px)": {
    display: "none",
  },
});

export const SubTitle = styled("p", {
  margin: "8px 20px 59px",

  fontSize: 18,
  lineHeight: "23px",
  fontWeight: 400,

  color: "#9090CE",

  textAlign: "center",
});

export const WrapperBlock = styled("div", {
  width: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  padding: "0 20px",
});

export const Block = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",

  position: "relative",

  padding: "0px 46px 39px",
  margin: "0 20px",

  background: "linear-gradient(180deg, #010123 0%, #07075E 100%)",

  borderRadius: 19,

  maxWidth: 960,

  "@media(max-width: 830px)": {
    flexDirection: "column-reverse",

    justifyContent: "center",
  },

  "@media(max-width: 420px)": {
    padding: "0px 30px 30px",
  },
});

export const InnerBlockWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",

  position: "relative",
  overflow: "hidden",

  paddingTop: 48,

  "@media(max-width: 830px)": {
    overflow: "visible",
  },
});

export const InfoWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",

  position: "relative",
  zIndex: 2,

  gap: 23,

  maxWidth: 400,

  "@media(max-width: 830px)": {
    maxWidth: "100%",
  },
});

export const LinkGoToMarket = styled(Link, {
  background: "linear-gradient(180deg, #080868 0%, #2D37A4 100%)",

  padding: "6px 25px 8px 21px",

  textDecoration: "none",

  borderRadius: 100,

  "@media(max-width: 830px)": {
    margin: "0 auto",
  },
});

export const Description = styled("p", {
  color: "#9090CE",
  fontSize: 18,
  fontWeight: 400,
  lineHeight: "23px",

  "@media(max-width: 420px)": {
    fontSize: 16,
    lineHeight: "20px",
  },
});

export const StyledImage = styled(Image, {
  right: "47px !important",
  top: "-35px !important",
  left: "auto !important",
  bottom: "auto !important",

  width: "300px !important",
  height: "344px !important",

  "@media(max-width: 830px)": {
    position: "relative !important",
    right: "auto !important",
    top: "auto !important",

    margin: "0 auto",
  },

  "@media(max-width: 420px)": {
    width: "217px !important",
    height: "249px !important",
  },
});

export const Initiatives = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr minmax(200px, 480px) minmax(200px, 480px) 1fr", // Четыре колонки
  padding: "20px 0",

  marginTop: 111,

  width: "100%",

  "@media(max-width: 580px)": {
    gridTemplateColumns: "1fr minmax(200px, 480px) 1fr",

    "& div": {
      justifyContent: "center",
    },
  },
});

export const DescriptionInitiatives = styled(Description, {
  fontSize: 18,
  lineHeight: "23px",
  fontWeight: 400,

  color: "#9090CE",

  maxWidth: 960,

  margin: "0 40px",

  "@media(max-width: 580px)": {
    fontSize: 16,
    lineHeight: "20px",
  },
});

export const InitiativeText = styled(Description, {
  fontSize: 28,
  lineHeight: "29px",
  fontWeight: 400,

  color: "#CAD9FF",

  display: "flex",
  alignItems: "center",
  gap: 20,
});
