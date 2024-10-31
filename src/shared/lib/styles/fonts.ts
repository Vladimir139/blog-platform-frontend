import { globalCss } from "@stitches/react";

export const setupFonts = globalCss({
  "@font-face": [
    {
      fontFamily: "Gilroy-Medium",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: 400,
      src: 'local("Gilroy-Medium"), url("/assets/fonts/Gilroy-Regular.woff2") format("woff2"), url("/assets/fonts/Gilroy-Regular.woff") format("woff")',
    },
  ],
});
