import { useUnit } from "effector-react";
import React, { FC } from "react";

import { $typeAuthForm, setTypeAuthForm } from "@/entities/auth/model";
import { Button, Input } from "@/shared/ui/atoms";

import * as S from "./styles";

export const AuthPage: FC = () => {
  const typeAuthForm = useUnit($typeAuthForm);

  return (
    <S.Wrapper>
      <S.Title>
        <S.ActiveTitleText
          isActive={typeAuthForm === "login"}
          onClick={() => setTypeAuthForm("login")}
        >
          Вход
        </S.ActiveTitleText>
        &nbsp; /&nbsp;
        <S.ActiveTitleText
          isActive={typeAuthForm === "register"}
          onClick={() => setTypeAuthForm("register")}
        >
          Регистрация
        </S.ActiveTitleText>
      </S.Title>
      {typeAuthForm === "login" ? (
        <S.Form>
          <S.InnerWrapperForm>
            <Input label="Почта:" placeholder="test@gmail.com" onChange={() => {}} value="" />
            <Input label="Пароль:" placeholder="Введите пароль" onChange={() => {}} value="" />
          </S.InnerWrapperForm>
          <Button stretch>Войти</Button>
        </S.Form>
      ) : (
        <S.Form>
          <S.InnerWrapperForm>
            <Input label="Имя:" placeholder="Введите имя" onChange={() => {}} value="" />
            <Input label="Фамилия:" placeholder="Введите фамилию" onChange={() => {}} value="" />
            <Input label="Почта:" placeholder="test@gmail.com" onChange={() => {}} value="" />
            <Input label="Пароль:" placeholder="Введите пароль" onChange={() => {}} value="" />
            <Input
              label="Подтвердите пароль:"
              placeholder="Введите пароль"
              onChange={() => {}}
              value=""
            />
          </S.InnerWrapperForm>
          <Button stretch>Зарегистрироваться</Button>
        </S.Form>
      )}
    </S.Wrapper>
  );
};
