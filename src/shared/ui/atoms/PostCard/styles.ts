import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const WrapperCard = styled("div", {
  width: "100%",
  maxWidth: 384,

  cursor: "pointer",

  position: "relative",
});

export const EditBtn = styled("button", {
  position: "absolute",

  cursor: "pointer",

  zIndex: 2,

  border: "none",

  top: 20,
  right: 20,

  width: 30,
  height: 30,

  backgroundColor: "#F99141",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: 7,
});

export const DeleteBtn = styled("button", {
  position: "absolute",

  cursor: "pointer",

  zIndex: 2,

  border: "none",

  top: 20,
  right: 65,

  width: 30,
  height: 30,

  backgroundColor: "red",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: 7,
});

export const PreviewImage = styled(Image, {
  position: "relative !important",

  maxHeight: 240,

  objectFit: "cover",
});

export const AdditionalInfo = styled("p", {
  fontSize: 14,
  fontWeight: "$semiBold",
  lineHeight: "20px",

  marginTop: 32,
  marginBottom: 12,

  color: "#6941C6",
});

export const TitleWrapper = styled("div", {
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
});

export const Title = styled("h3", {
  fontSize: 24,
  fontWeight: "$semiBold",
  lineHeight: "32px",
});

export const ShortDescription = styled("p", {
  fontSize: 16,
  fontWeight: "$regular",
  lineHeight: "24px",

  color: "#667085",
});

export const WrapperIcon = styled("div", {
  marginTop: 7,
});
