import { styled } from "@/shared/lib/styles";

export const Main = styled("main", {
  flex: 1,
});

export const AppWrapper = styled("div", {
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",

  width: "100%",
  maxWidth: "100%",
  minHeight: "100vh",
});
