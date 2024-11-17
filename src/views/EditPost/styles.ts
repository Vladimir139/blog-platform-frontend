import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("div", {
  maxWidth: "800px",
  margin: "0 auto 50px",
});

export const Title = styled("p", {
  fontSize: 32,
  lineHeight: "34px",
  fontWeight: 500,

  textAlign: "center",

  marginTop: 30,
  marginBottom: 30,
});

export const PreviewBlockContent = styled("p", {});

export const NothingText = styled("p", {});

export const WrapperButton = styled("div", {
  maxWidth: 200,

  marginTop: 20,
});

export const Divider = styled("div", {
  width: "100%",
  height: "1px",

  backgroundColor: "#EAECF0",

  marginTop: 50,
  marginBottom: 50,
});
