import { createEffect, createEvent, createStore, sample } from "effector";

import { IPost } from "@/entities/posts/model/types";
import { api } from "@/shared/lib/api";

export const $posts = createStore<IPost[]>([]);

export const setPosts = createEvent<IPost[]>();
export const getAllPosts = createEvent();

// ------------------------------------------------------------------------------------

$posts.on(setPosts, (_, payload) => payload);

// ------------------------------------------------------------------------------------

export const getAllPostsFx = createEffect(async () => {
  try {
    const { data } = await api.posts.getAllPosts();

    console.log("getPostsFx", data);
    return data;
  } catch (e) {
    console.log("handleLoginFxError", e);
    return [];
  }
});

// ------------------------------------------------------------------------------------

sample({
  clock: getAllPosts,
  target: getAllPostsFx,
});

sample({
  clock: getAllPostsFx.doneData,
  fn: (data) => {
    console.log("Posts received:", data);
    return data;
  },
  target: setPosts,
});
