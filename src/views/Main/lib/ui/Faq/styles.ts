import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  marginTop: 82,
  padding: "0 20px",

  position: "relative",
});

export const DecorImageRubinGlow = styled(Image, {
  top: "-200px !important",
  left: "auto !important",
  right: "-100px !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "732px !important",
  height: "600px !important",
});

export const WrapperAccordion = styled("div", {
  maxWidth: 1027,

  margin: "43px auto 99px",
});
