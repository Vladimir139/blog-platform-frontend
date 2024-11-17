import { css, styled } from "@/shared/lib/styles";

export const Divider = styled("div", {
  width: "100%",
  height: "1px",

  backgroundColor: "#1A1A1A",
});

export const WrapperMainPage = styled("div", {
  marginTop: 50,
  marginBottom: 50,
});

export const Title = styled("h1", {
  fontSize: 244,
  fontWeight: "bold",

  textAlign: "center",
});

export const TitlePostsList = styled("h1", {
  fontSize: 24,
  lineHeight: "32px",
  fontWeight: "$semiBold",

  textAlign: "start",

  marginTop: 30,
});

export const PostsList = styled("div", {
  display: "flex",
  alignItems: "start",
  justifyContent: "start",

  flexWrap: "wrap",

  gap: "48px 32px",

  height: 862,
});

export const paginationContainer = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  listStyle: "none",
  padding: "20px 0",
  borderTop: "1px solid #EAECF0",
  marginTop: 30,
});

export const paginationItem = css({
  color: "#667085",
  cursor: "pointer",
  transition: "background-color 0.3s, color 0.3s",
  borderRadius: 8,
  textDecoration: "none",

  fontSize: 14,
  fontWeight: 500,
  lineHeight: "20px",
});

export const paginationBreak = css({
  color: "#667085",
});

export const paginationDisabled = css({
  color: "#ADB5BD",
  cursor: "not-allowed",
});

export const paginationPreviousItem = css({
  marginRight: "auto",
});

export const paginationNextItem = css({
  marginLeft: "auto",
});

export const paginationLink = css({
  textDecoration: "none",
  color: "#667085",
  padding: "8px 12px",
  margin: "0 2px",
});

export const paginationActiveLink = css({
  backgroundColor: "#F9F5FF",
  color: "#7F56D9",

  borderRadius: 8,
});

export const WrapperNextBtn = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: 8,

  "& svg": {
    transform: "rotate(-180deg)",
  },
});

export const WrapperPrevBtn = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: 8,
});
