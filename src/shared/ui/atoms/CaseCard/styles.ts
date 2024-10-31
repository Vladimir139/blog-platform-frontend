import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("div", {
  padding: "53px 29px 0 29px",

  width: "100%",
  maxWidth: 528,

  height: 420,

  position: "relative",
  zIndex: -3,
  overflow: "hidden",

  background: "#010123",

  border: "1px solid #8080B754",
  borderRadius: 20,

  "@media(max-width: 545px)": {
    padding: "33px 29px 0 29px",
  },
});

export const Title = styled("h3", {
  fontSize: 30,
  lineHeight: "23px",
  fontWeight: 400,

  marginBottom: 17,

  "@media(max-width: 545px)": {
    fontSize: 20,

    marginBottom: 7,
  },
});

export const Description = styled("p", {
  fontSize: 15,
  lineHeight: "26px",
  fontWeight: 400,

  color: "#9090CE",
});

export const StyledImage = styled(Image, {
  width: "auto !important",
  height: "auto !important",

  top: "auto !important",
  left: "auto !important",

  bottom: "-20% !important",
  right: "-20% !important",
});

export const StyledDecorImage = styled(Image, {
  width: "461px !important",
  height: "481px !important",

  zIndex: -1,

  top: "0 !important",
  bottom: "auto !important",
  left: "auto !important",
  right: "0 !important",
});
