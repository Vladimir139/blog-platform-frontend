import { createEffect, createEvent, createStore, sample } from "effector";

import { IUser } from "@/entities/user/model/types";
import { api } from "@/shared/lib/api";

export const $user = createStore<null | IUser>(null);

export const getMe = createEvent();
export const setMe = createEvent<IUser | null>();
export const resetMe = createEvent();

// ------------------------------------------------------------------------------------

export const getUserFx = createEffect(async () => {
  try {
    const { data } = await api.user.getMe();

    return data;
  } catch (e) {
    console.log("getUserFxError", e);

    api.auth.logout();

    return null;
  }
});

// ------------------------------------------------------------------------------------

$user.on(setMe, (_, payload) => payload).reset(resetMe);

// ------------------------------------------------------------------------------------

sample({
  clock: getMe,
  target: getUserFx,
});

sample({
  clock: getUserFx.doneData,
  target: setMe,
});

// ------------------------------------------------------------------------------------

export const $loadingUser = getUserFx.pending;
