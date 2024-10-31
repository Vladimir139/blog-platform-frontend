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
});

export const DecorImageCasesNloWithStarsAndGlow = styled(Image, {
  top: "auto !important",
  left: "auto !important",
  right: "-33% !important",
  bottom: "-10% !important",

  zIndex: -5,

  width: "1155px !important",
  height: "522px !important",
});

export const CasesList = styled("div", {
  display: "flex",
  // alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "space-between",

  gap: "20px 21px",

  marginTop: 32,
});
