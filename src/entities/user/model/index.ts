import { createEffect, createEvent, createStore, sample } from "effector";

import { IUser } from "@/entities/user/model/types";
import { api } from "@/shared/lib/api";

export const $user = createStore<null | IUser>(null);

export const getMe = createEvent();
export const setMe = createEvent<IUser | null>();
export const resetMe = createEvent();
export const editMe = createEvent<IUser>();

// ------------------------------------------------------------------------------------

export const getMeFx = createEffect(async () => {
  try {
    const { data } = await api.user.getMe();

    return data;
  } catch (e) {
    console.log("getMeFxError", e);

    api.auth.logout();

    return null;
  }
});

export const editMeFx = createEffect(async (payload: IUser) => {
  try {
    const { data } = await api.user.editMe(payload);

    return data;
  } catch (e) {
    console.log("editMeFxError", e);

    return null;
  }
});

// ------------------------------------------------------------------------------------

$user.on(setMe, (_, payload) => payload).reset(resetMe);

// ------------------------------------------------------------------------------------

sample({
  clock: getMe,
  target: getMeFx,
});

sample({
  clock: getMeFx.doneData,
  target: setMe,
});

sample({
  clock: editMe,
  target: editMeFx,
});

sample({
  clock: editMeFx.doneData,
  target: setMe,
});

// ------------------------------------------------------------------------------------

export const $loadingUser = getMeFx.pending;
export const $loadingEditUser = editMeFx.pending;
