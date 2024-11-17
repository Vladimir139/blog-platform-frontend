import { useRouter } from "next/router";
import React, { FC } from "react";

import { useAuth } from "@/shared/lib/hooks";

import * as S from "./styles";

export const Header: FC = () => {
  const { isAuth } = useAuth();
  const { asPath } = useRouter();

  return (
    <S.Header>
      <S.Navigation>
        <S.LeftWrapper>
          <S.NavLink href="/">Твое имя</S.NavLink>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.NavLink href="/" isActive={asPath === "/"}>
            Посты
          </S.NavLink>
          {isAuth ? (
            <S.NavLink href="/profile" isActive={asPath === "/profile"}>
              Профиль
            </S.NavLink>
          ) : (
            <S.NavLink href="/auth" isActive={asPath === "/auth"}>
              Войти
            </S.NavLink>
          )}
        </S.RightWrapper>
      </S.Navigation>
    </S.Header>
  );
};
