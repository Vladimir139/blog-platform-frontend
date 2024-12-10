import { useUnit } from "effector-react";
import { useRouter } from "next/router";
import React, { ChangeEvent, FC, useEffect, useState } from "react";

import {
  $loginLoading,
  $registerLoading,
  $typeAuthForm,
  handleLoginFx,
  handleRegisterFx,
  handleSubmitLogin,
  handleSubmitRegister,
  setTypeAuthForm,
} from "@/entities/auth/model";
import { LoginFormFields, RegisterFormFields } from "@/entities/auth/model/types";
import { Button, Input, Loader } from "@/shared/ui/atoms";

import * as S from "./styles";

export const AuthPage: FC = () => {
  const router = useRouter();
  const typeAuthForm = useUnit($typeAuthForm);
  const loginLoading = useUnit($loginLoading);
  const registerLoading = useUnit($registerLoading);

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

  useEffect(() => {
    // Перенаправление после успешного логина
    handleLoginFx.doneData.watch(() => {
      router.push("/"); // Перенаправляем на главную страницу
    });

    // Перенаправление после успешной регистрации
    handleRegisterFx.doneData.watch(() => {
      router.push("/"); // Перенаправляем на главную страницу
    });
  }, [router]);

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

  const onSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmitLogin(loginForm);
  };

  const onSubmitRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Добавляем проверку пароля и подтверждения пароля
    if (registerForm.password !== registerForm.confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }
    handleSubmitRegister(registerForm);
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
          <Button stretch disabled={loginLoading} onClick={onSubmitLogin}>
            Войти {loginLoading && <Loader style={{ marginLeft: 6 }} />}
          </Button>
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
          <Button stretch disabled={registerLoading} onClick={onSubmitRegister}>
            Зарегистрироваться {registerLoading && <Loader style={{ marginLeft: 6 }} />}
          </Button>
        </S.Form>
      )}
    </S.Wrapper>
  );
};
