import { createEvent, createStore } from "effector";

export const $user = createStore<null | { firstname: string }>(null);

export const setUser = createEvent<{ firstname: string }>();
export const resetUser = createEvent();

$user.on(setUser, (_, payload) => payload).reset(resetUser);
