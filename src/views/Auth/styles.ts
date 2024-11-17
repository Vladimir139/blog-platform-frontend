import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("div", {});

export const Title = styled("h2", {
  fontSize: 24,
  fontWeight: "$semibold",

  textAlign: "center",

  marginTop: 100,
});

export const ActiveTitleText = styled("span", {
  cursor: "pointer",

  variants: {
    isActive: {
      true: {
        color: "#4182F9",
      },
    },
  },
});

export const Form = styled("form", {
  width: "100%",
  maxWidth: 350,

  margin: "0 auto",
});

export const InnerWrapperForm = styled("div", {
  display: "flex",
  flexDirection: "column",

  gap: 20,

  marginTop: 30,
  marginBottom: 30,
});
