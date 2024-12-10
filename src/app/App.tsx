import { useUnit } from "effector-react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

import { $user } from "@/entities/user/model";
import { api } from "@/shared/lib/api";
import { useAuth } from "@/shared/lib/hooks";
import { setupGlobalStyles } from "@/shared/lib/styles";
import { Footer, Header } from "@/widgets";

import * as S from "./styles";
import { AppProps } from "./types";

export const App: FC<AppProps> = ({ children }) => {
  const router = useRouter();
  const user = useUnit($user);
  const { isAuth } = useAuth();

  setupGlobalStyles();

  useEffect(() => {
    const refreshToken = Cookies.get("refreshToken");
    if (!refreshToken && user) api.auth.logout();
  }, [router.pathname, user]);

  useEffect(() => {
    if (!Cookies.get("accessToken") && router.pathname !== "/auth") {
      router.push("/auth");
    }
  }, [router.pathname, isAuth, router]);

  return (
    <S.AppWrapper>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.AppWrapper>
  );
};
