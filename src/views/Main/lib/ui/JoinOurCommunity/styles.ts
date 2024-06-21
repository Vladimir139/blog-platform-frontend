import Link from "next/link";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "40px 80px",

  background: "$radialGradient",

  borderRadius: 20,

  gap: 50,

  marginTop: 231,

  "@media(max-width: 1200px)": {
    padding: "30px",
  },

  "@media(max-width: 1066px)": {
    flexDirection: "column",
    alignItems: "start",

    gap: 20,
  },

  "@media(max-width: 740px)": {
    marginTop: 40,
  },
});

export const TextWrapper = styled("p", {
  fontSize: "32px",
  lineHeight: "34px",
  fontWeight: 500,

  "& span": {
    fontWeight: 800,
  },

  "@media(max-width: 740px)": {
    fontSize: "22px",
    lineHeight: "24px",
  },
});

export const SocialNetworkList = styled("div", {
  display: "flex",
  alignItems: "center",

  gap: 20,
});

export const SocialNetwork = styled("div", {
  position: "relative", // Добавлено для создания контекста наложения
  backgroundColor: "rgba(0, 0, 0, 0.1)", // Полупрозрачный фоновый цвет

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: 10,

  width: 90,
  height: 90,

  "& > div": {
    position: "relative",
    zIndex: 1, // Убедитесь, что иконки находятся выше размытия
  },

  "@media(max-width: 740px)": {
    width: 50,
    height: 50,
  },
});

export const StyledLink = styled(Link, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  variants: {
    type: {
      discord: {
        "@media(max-width: 740px)": {
          "& svg": {
            width: "31px",
            height: "23px",
          },
        },
      },
      telegram: {
        "@media(max-width: 740px)": {
          "& svg": {
            width: "27px",
            height: "23px",
          },
        },
      },
      x: {
        "@media(max-width: 740px)": {
          "& svg": {
            width: "26px",
            height: "25px",
          },
        },
      },
    },
  },
});
