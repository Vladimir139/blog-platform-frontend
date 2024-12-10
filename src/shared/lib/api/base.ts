import axiosInstance from "axios";
import Cookies from "js-cookie";

export const axios = axiosInstance.create({
  baseURL: process.env.BASE_BOT_URL,
  timeout: 30_000,
  headers: {
    Authorization: `Bearer ${Cookies.get("accessToken")}`,
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  (config) => {
    if (config.headers) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${Cookies.get("accessToken")}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (res) => Promise.resolve(res),
  async (error) => {
    const originalRequest = error.config;

    if (+error.response.status === 401 && Cookies.get("refreshToken")) {
      // const { data } = await api.auth.getNewTokens();

      // originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

      return axios(originalRequest);
    }

    return Promise.reject(error);
  },
);
