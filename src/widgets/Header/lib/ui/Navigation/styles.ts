import Link from "next/link";

import { styled } from "@/shared/lib/styles";

export const NavigationList = styled("nav", {
  display: "flex",
  alignItems: "center",
  gap: 50,

  "@media(max-width: 380px)": {
    width: "100%",
  },
});

export const NavItem = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap",

  cursor: "pointer",

  variants: {
    isButton: {
      true: {
        width: 154,

        "@media(max-width: 560px)": {
          width: "auto",

          "& button": {
            borderRadius: "10px !important",
            padding: "10px 25px",

            width: "auto",
          },
        },

        "@media(max-width: 368px)": {
          width: "100%",

          "& button": {
            width: "100%",
          },
        },
      },
    },
  },
});

export const TextButton = styled("p", {
  "@media(max-width: 490px)": {
    fontSize: "16px",
    lineHeight: "18px",
  },
});

export const StyledLink = styled(Link, {
  textDecoration: "none",
});
