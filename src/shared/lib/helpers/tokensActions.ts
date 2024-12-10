import Cookies from "js-cookie";

export const saveTokensStorage = ({
  access_token,
  refresh_token,
}: {
  access_token: string;
  refresh_token: string;
}) => {
  Cookies.set("accessToken", access_token);
  Cookies.set("refreshToken", refresh_token);
};

export const removeTokensStorage = () => {
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
};
