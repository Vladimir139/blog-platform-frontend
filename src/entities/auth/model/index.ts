import { createEffect, createEvent, createStore, sample } from "effector";

import { LoginFormFields, RegisterFormFields } from "@/entities/auth/model/types";
import { setMe } from "@/entities/user/model";
import { api } from "@/shared/lib/api";
import { saveTokensStorage } from "@/shared/lib/helpers";

export const $typeAuthForm = createStore<"login" | "register">("login");

export const setTypeAuthForm = createEvent<"login" | "register">();

$typeAuthForm.on(setTypeAuthForm, (_, payload) => payload);

// ------------------------------------------------------------------------------------

export const handleSubmitLogin = createEvent<LoginFormFields>();
export const handleSubmitRegister = createEvent<RegisterFormFields>();

// ------------------------------------------------------------------------------------

export const handleLoginFx = createEffect(async ({ email, password }: LoginFormFields) => {
  try {
    const { data } = await api.auth.login({ email, password });

    saveTokensStorage({ access_token: data.access_token, refresh_token: data.refresh_token });

    return data.user;
  } catch (e) {
    console.log("handleLoginFxError", e);
    return null;
  }
});

export const handleRegisterFx = createEffect(
  async ({ email, password, lastName, firstName }: Omit<RegisterFormFields, "confirmPassword">) => {
    try {
      const { data } = await api.auth.register({
        email,
        password,
        lastName,
        firstName,
      });

      saveTokensStorage({ access_token: data.access_token, refresh_token: data.refresh_token });

      return data.user;
    } catch (e) {
      console.log("handleLoginFxError", e);
      return null;
    }
  },
);

// ------------------------------------------------------------------------------------

sample({
  clock: handleSubmitLogin,
  target: handleLoginFx,
});

sample({
  clock: handleLoginFx.doneData,
  target: setMe,
});

sample({
  clock: handleSubmitRegister,
  target: handleRegisterFx,
});

sample({
  clock: handleRegisterFx.doneData,
  target: setMe,
});

// ------------------------------------------------------------------------------------

export const $loginLoading = handleLoginFx.pending;
export const $registerLoading = handleRegisterFx.pending;
