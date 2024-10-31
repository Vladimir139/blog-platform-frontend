import Image from "next/image";
import Link from "next/link";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  marginTop: 165,

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
});

export const SubTitle = styled("p", {
  marginTop: 8,
  marginBottom: 59,

  fontSize: 18,
  lineHeight: "23px",
  fontWeight: 400,

  color: "#9090CE",

  textAlign: "center",
});

export const Block = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  position: "relative",
  overflow: "hidden",

  padding: "48px 46px 39px",
  margin: "0 auto",

  background: "linear-gradient(180deg, #010123 0%, #07075E 100%)",

  borderRadius: 19,

  maxWidth: 960,
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
});

export const LinkGoToMarket = styled(Link, {
  background: "linear-gradient(180deg, #080868 0%, #2D37A4 100%)",

  padding: "6px 25px 8px 21px",

  textDecoration: "none",

  borderRadius: 100,
});

export const Description = styled("p", {
  color: "#9090CE",
});

export const StyledImage = styled(Image, {
  // position: "relative !important",

  right: "47px !important",
  top: "auto !important",
  left: "auto !important",
  bottom: "auto !important",

  width: "auto !important",
  height: "auto !important",

  maxWidth: 300,
  maxHeight: 344,
});

export const Initiatives = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr minmax(200px, 480px) minmax(200px, 480px) 1fr", // Четыре колонки
  padding: "20px 0",

  marginTop: 111,
});

export const DescriptionInitiatives = styled(Description, {
  fontSize: 18,
  lineHeight: "23px",
  fontWeight: 400,

  color: "#9090CE",

  maxWidth: 960,

  margin: "0 auto",
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
