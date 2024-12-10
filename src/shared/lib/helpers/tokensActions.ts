import Cookies from "js-cookie";

export const saveTokensStorage = ({
  access_token,
  refresh_token,
}: {
  access_token: string;
  refresh_token: string;
}) => {
  Cookies.set("access_token", access_token);
  Cookies.set("refresh_token", refresh_token);
};

export const removeTokensStorage = () => {
  Cookies.remove("access_token");
  Cookies.remove("refresh_token");
};
