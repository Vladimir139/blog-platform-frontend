import { createEvent, createStore } from "effector";

export const $typeAuthForm = createStore<"login" | "register">("login");

export const setTypeAuthForm = createEvent<"login" | "register">();

$typeAuthForm.on(setTypeAuthForm, (_, payload) => payload);
