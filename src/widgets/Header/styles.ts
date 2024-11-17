import Link from "next/link";

import { styled } from "@/shared/lib/styles";

export const Header = styled("header", {
  maxWidth: 1220,
  width: "100%",
  margin: "30px auto 0",
});

export const Navigation = styled("nav", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const LeftWrapper = styled("div", {});

export const RightWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: 5,
});

export const NavLink = styled(Link, {
  fontSize: 20,
  lineHeight: "24px",
  fontWeight: 400,

  padding: 18,

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
