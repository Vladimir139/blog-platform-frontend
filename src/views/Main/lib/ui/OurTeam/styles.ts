import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  marginTop: 122,

  position: "relative",
});

export const DecorImageLongBlueGlow = styled(Image, {
  top: "-300px !important",
  left: "auto !important",
  right: "-400px !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "1563px !important",
  height: "1563px !important",
});

export const WrapperSwiper = styled("section", {
  padding: "19px 0px 0",
});

export const PersonCard = styled("div", {
  padding: "41px 58px 41px 41px",

  borderRadius: 10,
  border: "1px solid #1C21BF",

  background: "#00000059",

  height: 600,

  "@media(max-width: 1000px)": {
    padding: "21px 28px 21px 21px",

    height: 400,
  },
});

export const ImagePerson = styled(Image, {
  position: "relative !important",

  width: "100px !important",
  height: "100px !important",

  "@media(max-width: 560px)": {
    width: "70px !important",
    height: "70px !important",
  },
});

export const NamePerson = styled("p", {
  fontSize: 42,
  fontWeight: 500,
  lineHeight: "60px",

  marginTop: 10,
  marginBottom: 10,

  "@media(max-width: 560px)": {
    fontSize: 32,
    lineHeight: "50px",
  },
});

export const DescriptionPerson = styled("p", {
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "24px",
});
