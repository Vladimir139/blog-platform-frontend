import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  marginTop: 68,
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

export const WrapperCoreValues = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const Block = styled("div", {
  position: "relative",
  width: "100%",
  overflow: "hidden",

  padding: "0px 46px 0px 0px",
  margin: "0 20px",

  background: "linear-gradient(142.99deg, #010123 16.78%, #07075E 134.99%)",

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

  paddingTop: 36,

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
  marginLeft: 46,
  marginBottom: 60,

  "@media(max-width: 830px)": {
    maxWidth: "100%",
  },
});

export const TitleCoreValues = styled("p", {
  fontSize: 24,
  fontWeight: 400,
  lineHeight: "26px",

  background: "linear-gradient(93.29deg, #FFFFFF 0.6%, #7217DA 127.89%)",
  backgroundClip: "text",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
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

export const WrapperButton = styled("div", {
  width: "100%",
  maxWidth: 210,
});

export const StyledImage = styled(Image, {
  position: "relative !important",
  zIndex: 2,

  width: "226px !important",
  height: "259px !important",

  "@media(max-width: 420px)": {
    width: "217px !important",
    height: "249px !important",
  },
});

export const StyledPlanet = styled(Image, {
  top: "auto !important",
  left: "auto !important",
  right: "-150px !important",
  bottom: "-285px !important",

  zIndex: 1,
  opacity: 0.5,

  width: "751px !important",
  height: "751px !important",
});

export const InitiativesBlock = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  justifyContent: "space-between",
  marginLeft: 46,
  marginBottom: 39,
  gap: "52px 20px",

  position: "relative",
  zIndex: 2,

  "@media(max-width: 580px)": {},
});

export const DescriptionInitiatives = styled(Description, {
  fontSize: 18,
  lineHeight: "23px",
  fontWeight: 400,

  color: "#9090CE",

  maxWidth: 960,

  margin: "45px 40px 75px",

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
