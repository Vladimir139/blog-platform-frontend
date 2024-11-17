import { createEvent, createStore } from "effector";

export const $user = createStore<null | { firstname: string }>({ firstname: "Vova" });

export const setUser = createEvent<{ firstname: string }>();
export const resetUser = createEvent();

$user.on(setUser, (_, payload) => payload).reset(resetUser);
