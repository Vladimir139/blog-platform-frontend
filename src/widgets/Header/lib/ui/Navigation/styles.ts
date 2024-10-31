import Image from "next/image";
import Link from "next/link";

import { styled } from "@/shared/lib/styles";

export const NavList = styled("div", {
  display: "flex",
  alignItems: "center",

  gap: 20,

  "@media(max-width: 940px)": {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",

    gap: 10,
  },
});

export const NavItem = styled("a", {
  fontSize: 15,
  lineHeight: "20px",
  fontWeight: 500,

  padding: "26px 12px 26px",

  textDecoration: "none",

  position: "relative",

  "&:after": {
    position: "absolute",
    bottom: 0,
    right: 0,

    left: "50%",
    transform: "translateX(-50%)",

    content: "",
    width: "0%",
    height: 1,
    backgroundColor: "#7B61FF",
    transition: "width 0.3s ease",
  },

  "&:hover": {
    color: "#7B61FF",

    "&::after": {
      width: "100%",
    },
  },

  "@media(max-width: 940px)": {
    padding: "10px",
  },

  variants: {
    isActive: {
      true: {
        color: "#7B61FF",

        "&::after": {
          width: "100%",
        },
      },
    },
  },
});

export const NavItemBtn = styled("button", {
  fontSize: 15,
  lineHeight: "20px",
  fontWeight: 500,
  color: "#FFFFFF",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: 9,

  padding: "26px 12px 26px",

  textDecoration: "none",

  background: "inherit",
  outline: "none",
  border: "none",

  position: "relative",

  "&:after": {
    position: "absolute",
    bottom: 0,
    right: 0,

    left: "50%",
    transform: "translateX(-50%)",

    content: "",
    width: "0%",
    height: 1,
    backgroundColor: "#7B61FF",
    transition: "width 0.3s ease",
  },

  "&:hover": {
    color: "#7B61FF",

    "& svg path": {
      fill: "#7B61FF",
    },

    "&::after": {
      width: "100%",
    },
  },

  "@media (max-width: 940px)": {
    padding: "10px",
  },

  variants: {
    isActive: {
      true: {
        color: "#7B61FF",

        "& svg path": {
          fill: "#7B61FF",
        },

        "&::after": {
          width: "100%",
        },
      },
    },
  },
});

export const WrapperArrowDown = styled("div", {
  variants: {
    isActive: {
      true: {
        transform: "rotate(180deg)",
      },
    },
  },
});

export const Navigation = styled("nav", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  width: "80%",

  gap: 20,

  "@media(max-width: 1024px)": {
    width: "auto",
  },
});

export const LaunchAppLink = styled(Link, {
  fontSize: 15,
  lineHeight: "20px",
  fontWeight: 400,

  textAlign: "center",
  textDecoration: "none",
  cursor: "pointer",

  padding: "16px 21px",
  maxWidth: 200,

  border: "1px solid #FFFFFF26",
  borderRadius: "12px",

  "@media (max-width: 940px)": {
    width: "100%",
    margin: "0 auto",
  },
});

export const WrapperMobile = styled("div", {
  position: "fixed",
  zIndex: 10,
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",

  width: "100%",
  height: "100%",

  transform: "translateY(-100%)",

  visibility: "hidden",
  overflow: "auto",
  backgroundColor: "#010123",

  transition: "$default",

  variants: {
    isOpened: {
      true: {
        transform: "translateY(0)",
        visibility: "visible",
      },
    },
  },
});

export const InnerWrapMobile = styled("div", {
  padding: "49px 50px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  "@media (max-width: 667px)": {
    padding: "30px 20px",
  },

  height: "100vh",
});

export const Logo = styled(Image, {
  position: "relative !important",

  width: "90px !important",
  height: "49px !important",

  marginBottom: 22,

  "@media(max-width: 940px)": {
    marginBottom: 0,
  },
});

export const TopWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",

  gap: 40,
});
