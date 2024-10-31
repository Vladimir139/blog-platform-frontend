import React, { FC } from "react";

import { Navigation } from "@/widgets/Header/lib/ui";

import * as S from "./styles";

export const Header: FC = () => (
  <S.Header>
    <S.InnerWrapperHeader>
      <S.Logo src="/images/common/CryptoryLogo.png" alt="logo cryptory" fill />
      <Navigation />
    </S.InnerWrapperHeader>
  </S.Header>
);
