import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  position: "relative",

  marginTop: 88,
});

export const WrapperTokenInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  width: "100%",
  maxWidth: 312,

  height: 347,

  borderRadius: 20,
  border: "1px solid #64669C",
  padding: 22,
});

export const InnerWrapperTokenomics = styled("div", {
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",

  gap: 10,

  marginTop: 60,
});

export const Divider = styled("div", {
  width: "100%",
  height: 1,

  backgroundColor: "#64669C",
});

export const StyledTokenomicsPhoto = styled(Image, {
  position: "relative !important",

  width: "682px !important",
  height: "365px !important",
});

export const Percentages = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",

  gap: 5,

  marginTop: 10,
});

export const WrapperPercentages = styled("div", {
  marginTop: 152,
});

export const DecorImageRubinGlow = styled(Image, {
  top: "20% !important",
  left: "20% !important",
  right: "auto !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "732px !important",
  height: "600px !important",
});

export const DecorImageBlueGlowOval = styled(Image, {
  top: "-30% !important",
  left: "auto !important",
  right: "0px !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "894px !important",
  height: "1078px !important",
});

export const VeriticalDivider = styled("div", {
  height: 275,
  width: 1,

  backgroundColor: "#64669C",
});

export const TokenInfoBlockTokenInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
});

export const TokenInfoBlock = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "33.3%",

  textAlign: "start",

  gap: 15,

  marginTop: 30,
});

export const BlockTitleTokenInfo = styled("p", {
  fontSize: 20,
  lineHeight: "54px",
  fontWeight: 400,

  color: "#CACFFF",
});

export const BlockValueTokenInfo = styled("p", {
  fontSize: 20,
  lineHeight: "31px",
  fontWeight: 400,
});

export const BlockTitle = styled("p", {
  fontSize: 30,
  lineHeight: "38px",
  fontWeight: 400,

  color: "#CACFFF",

  textAlign: "center",
});

export const BlockValue = styled("p", {
  fontSize: 18,
  lineHeight: "31px",
  fontWeight: 400,

  textAlign: "center",

  "& span": {
    color: "#6C52EE",
  },
});
