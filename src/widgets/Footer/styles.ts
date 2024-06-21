import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const FooterWrapper = styled("footer", {
  padding: "30px 0 97px",

  borderTop: "1px solid rgba(255, 255, 255, 0.5)",

  marginTop: 62,

  position: "relative",

  "@media(max-width: 650px)": {
    padding: "30px 0 67px",
  },
});

export const BigGlowImage = styled(Image, {
  top: "auto !important",
  bottom: "0 !important",
  left: "auto !important",
  right: "auto !important",

  maxHeight: "1207px !important",
  maxWidth: "1920px !important",
  width: "auto !important",
  height: "auto !important",

  zIndex: "$blockBack",

  "@media(max-width: 1230px)": {
    height: "900px !important",
    width: "100% !important",
  },

  "@media(max-width: 1000px)": {
    height: "950px !important",
    width: "1200px !important",
  },

  "@media(max-width: 740px)": {
    height: "850px !important",
  },
});

export const GlowImage = styled(Image, {
  top: "auto !important",
  bottom: "0 !important",
  left: "0 !important",
  right: "auto !important",

  maxHeight: "1397px !important",
  maxWidth: "852px !important",
  width: "auto !important",
  height: "auto !important",

  zIndex: "$blockBack",
});

export const InnerWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  gap: 20,

  "@media(max-width: 680px)": {
    flexDirection: "column-reverse",
    alignItems: "start",
  },
});

export const LeftWrapper = styled("div", {
  fontSize: "12px",
  lineHeight: "14px",
  fontWeight: 500,
});

export const RightWrapper = styled("div", {
  fontSize: "14px",
  lineHeight: "16px",
  fontWeight: 500,

  display: "flex",
  alignItems: "center",
  gap: 80,

  color: "$text",

  "& a": {
    textDecoration: "none",

    whiteSpace: "nowrap",
  },

  "@media(max-width: 794px)": {
    gap: 40,
  },
});
