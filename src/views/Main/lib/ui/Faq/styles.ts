import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  marginTop: 82,
  padding: "0 20px",

  position: "relative",

  "@media(max-width: 500px)": {
    marginTop: 57,
    padding: "0 10px",
  },
});

export const DecorImageRubinGlow = styled(Image, {
  top: "-200px !important",
  left: "auto !important",
  right: "-100px !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "732px !important",
  height: "600px !important",

  "@media(max-width: 650px)": {
    display: "none",
  },
});

export const DecorImageBlueLongGlow = styled(Image, {
  top: "-75% !important",
  left: "auto !important",
  right: "-40% !important",
  bottom: "auto !important",

  zIndex: -5,

  transform: "rotate(50deg)",

  width: "1728px !important",
  height: "1240px !important",

  "@media(max-width: 650px)": {
    display: "none",
  },
});

export const WrapperAccordion = styled("div", {
  maxWidth: 1027,

  margin: "43px auto 99px",

  "@media(max-width: 500px)": {
    margin: "27px auto 0px",
  },
});
