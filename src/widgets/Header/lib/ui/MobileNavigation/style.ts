import Link from "next/link";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("div", {
  position: "fixed",
  zIndex: "$mobileNavOverlay",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",

  width: "100%",
  height: "100%",

  transform: "translateY(-100%)",

  visibility: "hidden",
  overflow: "auto",
  backgroundColor: "$white",

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

export const InnerWrap = styled("div", {
  padding: "49px 50px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  "@media (max-width: 667px)": {
    padding: "30px 20px",
  },

  height: "100vh",
});

export const NavigationHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Logo = styled(Link, {
  fontWeight: 300,
  fontSize: "$titleMediumSmall",
  lineHeight: "29px",

  display: "block",

  "@media (max-width: 460px)": {
    fontSize: "$largeMedium",
    lineHeight: "22px",
  },
});

export const Navigation = styled("nav", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",

  gap: 10,

  marginTop: 50,

  marginBottom: "auto",
});

export const NavLink = styled(Link, {
  fontSize: "$large",
  lineHeight: "18px",

  padding: 5,
});

export const TopWrapper = styled("div", {});
