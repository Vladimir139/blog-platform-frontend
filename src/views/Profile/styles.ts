import { css, styled } from "@/shared/lib/styles";

export const HeaderProfileLine = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  marginTop: 30,
  paddingTop: 20,

  borderTop: "1px solid #EAECF0",
});

export const WelcomeInfo = styled("div", {});

export const TitleWelcome = styled("p", {
  fontSize: 24,
  fontWeight: "$medium",
  lineHeight: "26px",

  marginBottom: 12,
});

export const DateText = styled("p", {
  fontSize: 16,
  fontWeight: 300,

  color: "#ADA7A7",
});

export const CreateNewPostWrapBtn = styled("div", {});

export const BlockUserInfo = styled("div", {
  marginTop: 32,
});

export const DecorBackground = styled("div", {
  background: "linear-gradient(90deg, #FFA3A3, #5D85FF)",

  height: 100,
  width: "100%",

  borderRadius: "10px 10px 0 0",
});

export const InnerWrapperUserInfo = styled("div", {
  backgroundColor: "#FFFFFF",

  padding: "32px",

  borderRadius: "0 0 10px 10px",
});

export const WrapperInputs = styled("div", {
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "1fr 1fr",

  gap: "30px",

  marginTop: 35,
});

export const Line = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  gap: "30px",
});

export const UserInfo = styled("div", {
  display: "flex",
  alignItems: "center",

  gap: 24,
});

export const WrapperUserActions = styled("div", {
  display: "flex",
  alignItems: "center",

  gap: 24,
});

export const WrapperUserData = styled("div", {
  display: "flex",
  flexDirection: "column",

  gap: 6,
});

export const UserPhoto = styled("div", {
  height: 100,
  width: 100,

  background: "linear-gradient(90deg, #AB72D7, #FF4145)",

  borderRadius: 9999,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Username = styled("div", {
  fontSize: 20,
  fontWeight: "$medium",
  lineHeight: "22px",
});

export const UserEmail = styled("div", {
  fontSize: 16,
  fontWeight: "$regular",
  lineHeight: "18px",

  opacity: 0.5,
});

export const TitlePostsList = styled("h1", {
  fontSize: 24,
  lineHeight: "32px",
  fontWeight: "$semiBold",

  textAlign: "start",

  marginTop: 30,
});

export const ActiveTitlePostsList = styled("span", {
  cursor: "pointer",

  variants: {
    isActive: {
      true: {
        color: "#4182F9",
      },
    },
  },
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

  marginBottom: 50,
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
