import { AxiosPromise } from "axios";
import Cookies from "js-cookie";

import { LoginFormFields, RegisterFormFields } from "@/entities/auth/model/types";
import { resetMe } from "@/entities/user/model";
import { AuthResponse } from "@/shared/lib/api/auth/types";
import { authUrls } from "@/shared/lib/api/auth/urls";
import { axios } from "@/shared/lib/api/base";
import { removeTokensStorage, saveTokensStorage } from "@/shared/lib/helpers";

export const authApi = {
  register: async (
    payload: Omit<RegisterFormFields, "confirmPassword">,
  ): Promise<AxiosPromise<AuthResponse>> => axios.post(authUrls.register, payload),
  login: async (payload: LoginFormFields): Promise<AxiosPromise<AuthResponse>> =>
    axios.post(authUrls.login, payload),
  refresh: async (): Promise<AxiosPromise<{ access_token: string; refresh_token: string }>> => {
    const refreshToken = Cookies.get("refresh_token");
    const { data } = await axios.post(authUrls.refresh, refreshToken);

    if (data.access_token) {
      saveTokensStorage({ access_token: data.access_token, refresh_token: data.refresh_token });
    }

    return data;
  },
  logout: () => {
    removeTokensStorage();
    resetMe();
  },
};
