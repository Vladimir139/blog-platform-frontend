import { useUnit } from "effector-react";
import React, { ChangeEvent, FC, useState } from "react";

import { $typeAuthForm, setTypeAuthForm } from "@/entities/auth/model";
import { LoginFormFields, RegisterFormFields } from "@/entities/auth/model/types";
import { Button, Input } from "@/shared/ui/atoms";

import * as S from "./styles";

export const AuthPage: FC = () => {
  const typeAuthForm = useUnit($typeAuthForm);

  // Состояние для формы логина
  const [loginForm, setLoginForm] = useState<LoginFormFields>({
    email: "",
    password: "",
  });

  // Состояние для формы регистрации
  const [registerForm, setRegisterForm] = useState<RegisterFormFields>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginEmailChange = (value: string) => {
    setLoginForm((prev) => ({ ...prev, email: value }));
  };

  const handleLoginPasswordChange = (value: string) => {
    setLoginForm((prev) => ({ ...prev, password: value }));
  };

  const handleRegisterFirstNameChange = (value: string) => {
    setRegisterForm((prev) => ({ ...prev, firstName: value }));
  };

  const handleRegisterLastNameChange = (value: string) => {
    setRegisterForm((prev) => ({ ...prev, lastName: value }));
  };

  const handleRegisterEmailChange = (value: string) => {
    setRegisterForm((prev) => ({ ...prev, email: value }));
  };

  const handleRegisterPasswordChange = (value: string) => {
    setRegisterForm((prev) => ({ ...prev, password: value }));
  };

  const handleRegisterConfirmPasswordChange = (value: string) => {
    setRegisterForm((prev) => ({ ...prev, confirmPassword: value }));
  };

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
            <Input
              label="Почта:"
              placeholder="test@gmail.com"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleLoginEmailChange(e.target.value)
              }
              value={loginForm.email}
            />
            <Input
              label="Пароль:"
              placeholder="Введите пароль"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleLoginPasswordChange(e.target.value)
              }
              value={loginForm.password}
            />
          </S.InnerWrapperForm>
          <Button stretch>Войти</Button>
        </S.Form>
      ) : (
        <S.Form>
          <S.InnerWrapperForm>
            <Input
              label="Имя:"
              placeholder="Введите имя"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleRegisterFirstNameChange(e.target.value)
              }
              value={registerForm.firstName}
            />
            <Input
              label="Фамилия:"
              placeholder="Введите фамилию"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleRegisterLastNameChange(e.target.value)
              }
              value={registerForm.lastName}
            />
            <Input
              label="Почта:"
              placeholder="test@gmail.com"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleRegisterEmailChange(e.target.value)
              }
              value={registerForm.email}
            />
            <Input
              label="Пароль:"
              placeholder="Введите пароль"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleRegisterPasswordChange(e.target.value)
              }
              value={registerForm.password}
            />
            <Input
              label="Подтвердите пароль:"
              placeholder="Введите пароль"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleRegisterConfirmPasswordChange(e.target.value)
              }
              value={registerForm.confirmPassword}
            />
          </S.InnerWrapperForm>
          <Button stretch>Зарегистрироваться</Button>
        </S.Form>
      )}
    </S.Wrapper>
  );
};
