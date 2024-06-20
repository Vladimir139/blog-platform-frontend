import { createStitches } from "@stitches/react";

import { setupFonts } from "./fonts";
import { setupStyles } from "./global";

export const media = {
  toWideMobile: "only screen and (max-width: 560px)",
  toTablet: "only screen and (max-width: 768px)",
  toWideTablet: "only screen and (max-width: 960px)",
  toLaptop: "only screen and (max-width: 1200px)",
};

export const { styled, getCssText, keyframes, createTheme, css, theme } = createStitches({
  theme: {
    colors: {
      background: "#160044",
      text: "#FFFFFF",

      block: "#430069",
      secondBlock: "#44016A",
      lightBlock: "#50167D",

      beige: "#FFC5C1",

      pinkToBlueGradient: "linear-gradient(90deg, rgba(202,55,143,1) 0%, rgba(18,58,197,1) 100%)",
      orangeToPinkGradient: "linear-gradient(90deg, rgba(255,138,0,1) 0%, rgba(173,0,255,1) 100%)",
      radialGradient: "linear-gradient(90deg, rgba(124,0,183,1) 15%, rgba(255,138,0,1) 100%)",
    },
    shadows: {},
    fonts: {
      inter: "Inter, sans-serif",
      montserrat: "Montserrat, sans-serif",
    },
    fontSizes: {
      little: "11px",
      small: "12px",
      smallMedium: "13px",
      smallLarge: "14px",
      defaultSmall: "15px",
      default: "16px",
      medium: "18px",
      large: "20px",
      largeMedium: "22px",
      titleSmall: "24px",
      titleMediumSmall: "26px",
      titleMedium: "28px",
      titleMediumLarge: "30px",
      titleLarge: "32px",
      big: "42px",
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
    letterSpacings: {
      default: 0,
      defaultLarge: "0.01em",
      small: "0.02em",
    },
    transitions: {
      default: "0.2s ease-in-out",
      long: "0.3s ease-in-out",
    },
    radii: {},
    zIndices: {
      blockFront: 1,
      blockBack: -1,
    },
  },
  media,
});

export const setupGlobalStyles = () => {
  setupFonts();
  setupStyles();
};
