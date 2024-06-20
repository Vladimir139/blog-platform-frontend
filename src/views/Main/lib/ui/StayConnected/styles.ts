import { styled } from "@stitches/react";
import Link from "next/link";

export const Wrapper = styled("section", {});

export const WrapperInfo = styled("div", {
  marginTop: 44,
  marginBottom: 55,

  maxWidth: 740,

  "@media(max-width: 740px)": {
    display: "flex",
    flexDirection: "column",

    gap: 10,

    marginTop: 28,
    marginBottom: 33,
  },
});

export const TitleInfo = styled("h4", {
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "22px",

  "@media(max-width: 740px)": {
    fontSize: "14px",
    lineHeight: "16px",
  },
});

export const DescriptionInfo = styled("p", {
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: "20px",

  "@media(max-width: 740px)": {
    fontSize: "12px",
    lineHeight: "14px",
  },
});

export const SocialNetworkList = styled("div", {
  display: "flex",
  alignItems: "center",

  gap: 35,

  marginBottom: 44,

  "@media(max-width: 740px)": {
    marginBottom: 36,
  },
});

export const SocialNetworkLink = styled(Link, {});

export const ReportBtn = styled("button", {
  padding: "16px 40px",

  color: " $text",

  border: "none",

  cursor: "pointer",

  borderRadius: 20,

  backgroundColor: "#000000",

  "@media(max-width: 740px)": {
    fontSize: "16px",
    lineHeight: "18px",

    width: "100%",

    borderRadius: 10,
  },
});
