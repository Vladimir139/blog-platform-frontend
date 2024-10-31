import { styled } from "@/shared/lib/styles";

export const StyledTitle = styled("h3", {
  fontSize: 48,
  lineHeight: "75px",
  fontWeight: 400,

  padding: "0 10px",

  textAlign: "center",

  background: "linear-gradient(94.89deg, #FFFFFF 49.61%, #7217DA 129.22%)",
  backgroundClip: "text",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",

  "@media(max-width: 530px)": {
    fontSize: 38,
    lineHeight: "65px",
  },
});

export const SubTitle = styled("p", {
  marginTop: 14,

  fontSize: 16,
  lineHeight: "26px",
  fontWeight: 400,

  color: "#FFFFFF99",

  textAlign: "center",
  whiteSpace: "pre-wrap",
});

export const AnchorHelper = styled("span", {
  position: "absolute",
  visibility: "hidden",
  top: "-50px",
});
