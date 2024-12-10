import { createEvent, createStore } from "effector";

import { IUser } from "@/entities/user/model/types";

export const $user = createStore<null | IUser>(null);

export const setUser = createEvent<IUser | null>();
export const resetUser = createEvent();

$user.on(setUser, (_, payload) => payload).reset(resetUser);
