import { FC } from "react";

import { setupGlobalStyles } from "@/shared/lib/styles";
import { AuthGuard } from "@/shared/ui/templates";
import { Footer, Header } from "@/widgets";

import * as S from "./styles";
import { AppProps } from "./types";

export const App: FC<AppProps> = ({ children }) => {
  setupGlobalStyles();

  return (
    <AuthGuard>
      <S.AppWrapper>
        <Header />
        <S.Main>{children}</S.Main>
        <Footer />
      </S.AppWrapper>
    </AuthGuard>
  );
};
