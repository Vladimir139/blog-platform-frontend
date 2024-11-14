import Image from "next/image";
import Link from "next/link";

import { styled } from "@/shared/lib/styles";

export const Footer = styled("footer", {
  border: "1px solid",

  borderImageSource: "linear-gradient(90deg, #0D0D59 0%, #306CFE 53.34%, #0D0D59 100%)",

  width: "100%",

  marginTop: 100,

  position: "relative",

  "&::before": {
    content: "",

    position: "absolute",
    top: 0,
    left: 0,

    width: "100%",
    height: 1,

    background: "linear-gradient(90deg, #0D0D59 0%, #306CFE 53.34%, #0D0D59 100%)",
  },

  "@media(max-width: 500px)": {
    marginTop: 0,

    "&::before": {
      width: 0,
      height: 0,

      background: "inherit",
    },
  },
});

export const InnerFooterWrapper = styled("div", {
  maxWidth: 1076,

  margin: "0 auto",

  padding: "0 20px",
});

export const TopWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  marginTop: 41,

  "@media(max-width: 788px)": {
    justifyContent: "center",
    flexDirection: "column",

    gap: 20,
  },

  "@media(max-width: 600px)": {
    gap: 0,
  },
});

export const LeftWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",

  width: "100%",
  maxWidth: 366,
});

export const Description = styled("p", {
  fontSize: 16,
  lineHeight: "26px",
  fontWeight: 400,
  fontFamily: "$GilroyRegular",

  marginTop: 54,
  marginBottom: 32,

  maxWidth: 350,
  color: "#FFFFFF99",

  marginLeft: 18,

  "@media(max-width: 788px)": {
    marginLeft: 0,
  },

  "@media(max-width: 600px)": {
    marginTop: 19,
    marginBottom: 14,
  },
});

export const RightWrapper = styled("div", {
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",

  gap: 10,

  width: "100%",
  maxWidth: 366,

  marginTop: 60,

  "@media(max-width: 600px)": {
    marginTop: 38,
  },
});

export const BottomWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  gap: 10,

  borderTop: "1px solid #FFFFFF1A",

  marginTop: 100,

  padding: "26px 0",

  "@media(max-width: 500px)": {
    flexDirection: "column",
    borderTop: "none",
    marginTop: 20,

    alignItems: "start",
    padding: "0px",

    gap: 29,
  },
});

export const StyledCryptoryLogo = styled(Image, {
  position: "relative !important",

  width: "100px !important",
  height: "55px !important",
});

export const UseItOnTelegramLink = styled(Link, {
  display: "flex",
  alignItems: "center",
  justifyContent: "start",

  gap: 10,

  width: 152,

  marginLeft: 18,

  background: "#09093F",
  borderRadius: 8,

  textDecoration: "none",

  padding: "11px 10px",

  "@media(max-width: 788px)": {
    marginLeft: 0,
  },
});

export const InfoTgLinkWrap = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",

  gap: 3,
});

export const LinkText = styled("p", {
  fontSize: 8,
  lineHeight: "9px",
  fontWeight: 400,
  fontFamily: "$OpenSans",
});

export const LinkTextBig = styled("p", {
  fontSize: 14,
  lineHeight: "16px",
  fontWeight: 400,
  fontFamily: "$OpenSans",
});

export const BlockLinks = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",

  gap: 20,

  width: "100%",
});

export const TitleLinks = styled("p", {
  fontSize: 25,
  lineHeight: "25px",
  fontWeight: 600,
  fontFamily: "$Inter",
});

export const ListLinks = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",

  gap: 10,
});

export const SocialNetworksList = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: 15,

  "@media(max-width: 600px)": {
    margin: "0 auto 33px",
  },
});

export const SocialNetwork = styled(Link, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: 40,
  height: 40,

  border: "2px solid #FFFFFF1A",

  borderRadius: 9999,
});

export const StyledLink = styled(Link, {
  fontSize: 16,
  lineHeight: "26px",
  fontWeight: 400,
  fontFamily: "$GilroyRegular",

  textDecoration: "none",

  color: "#FFFFFF99",
});

export const Copyrite = styled("p", {
  fontSize: 16,
  lineHeight: "26px",
  fontWeight: 400,
  fontFamily: "$GilroyRegular",

  textDecoration: "none",

  color: "#FFFFFF99",

  variants: {
    mobileHidden: {
      true: {
        "@media(max-width: 600px)": {
          display: "none",
        },
      },
    },
  },
});
