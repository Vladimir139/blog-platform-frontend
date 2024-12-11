import { createEffect, createEvent, createStore, sample } from "effector";

import { CreatePostProps, IPost } from "@/entities/posts/model/types";
import { $user, getMe, setMe } from "@/entities/user/model";
import { IUser } from "@/entities/user/model/types";
import { api } from "@/shared/lib/api";

export const $posts = createStore<IPost[]>([]);
export const $post = createStore<IPost | null>(null);

export const setPosts = createEvent<IPost[]>();
export const getAllPosts = createEvent();
export const getMePosts = createEvent();
export const createPost = createEvent<CreatePostProps>();
export const deletePost = createEvent<{ id: string }>();
export const getPost = createEvent<{ id: string }>();
export const clearPost = createEvent();
export const updatePost = createEvent<{ id: string; payload: CreatePostProps }>();

// ------------------------------------------------------------------------------------

export const getAllPostsFx = createEffect(async () => {
  try {
    const { data } = await api.posts.getAllPosts();

    console.log("getAllPostsFx", data);
    return data;
  } catch (e) {
    console.log("getAllPostsFxError", e);
    return [];
  }
});

export const getMePostsFx = createEffect(async () => {
  try {
    const { data } = await api.posts.getMePosts();

    console.log("getMePosts", data);
    return data;
  } catch (e) {
    console.log("getAllPostsFxError", e);
    return [];
  }
});

export const createPostFx = createEffect(async (payload: CreatePostProps) => {
  try {
    const { data } = await api.posts.createPost(payload);

    console.log("createPostFx IPost", data);
    return data;
  } catch (e) {
    console.log("createPostFxError", e);
    return null;
  }
});

export const deletePostFx = createEffect(async ({ id }: { id: string }) => {
  try {
    const { data } = await api.posts.deletePost(id);

    console.log("deletePostFx IPost", data);
    return data;
  } catch (e) {
    console.log("deletePostFxError", e);
    return null;
  }
});

export const getPostFx = createEffect(async ({ id }: { id: string }) => {
  try {
    const { data } = await api.posts.getPost(id);

    console.log("getPostByIdFx IPost", data);
    return data;
  } catch (e) {
    console.log("getPostByIdFxError", e);
    return null;
  }
});

export const updatePostFx = createEffect(
  async ({ id, payload }: { id: string; payload: CreatePostProps }) => {
    try {
      const { data } = await api.posts.updatePost(id, payload); // Запрос к API для обновления
      console.log("updatePostFx", data);
      return data;
    } catch (e) {
      console.log("updatePostFxError", e);
      return null;
    }
  },
);

// ------------------------------------------------------------------------------------

sample({
  clock: getAllPosts,
  target: getAllPostsFx,
});

sample({
  clock: getAllPostsFx.doneData,
  target: setPosts,
});

sample({
  clock: createPost,
  target: createPostFx,
});

sample({
  clock: createPostFx.doneData,
  target: [getAllPosts, getMe, getMePosts],
});

sample({
  clock: getMePosts,
  target: getMePostsFx,
});

sample({
  clock: getMePostsFx.doneData,
  source: $user,
  filter: (user): user is IUser => user !== null,
  fn: (user, posts) =>
    ({
      ...user,
      posts,
    } as IUser),
  target: setMe,
});

sample({
  clock: getMePosts,
  target: getMePostsFx,
});

sample({
  clock: deletePost,
  target: deletePostFx,
});

sample({
  clock: deletePostFx.doneData,
  target: getMePosts,
});

sample({
  clock: getPost,
  target: getPostFx,
});

sample({
  clock: updatePost,
  target: updatePostFx,
});

sample({
  clock: updatePostFx.doneData,
  filter: (post): post is IPost => post !== null,
  target: $post,
});

sample({
  clock: updatePostFx.doneData,
  target: [getMePosts, getAllPosts],
});

// ------------------------------------------------------------------------------------

$posts.on(setPosts, (_, payload) => payload.reverse());

$post.on(getPostFx.doneData, (_, post) => post).reset(clearPost);

// ------------------------------------------------------------------------------------

export const $createPostLoading = createPostFx.pending;
export const $updatePostLoading = createPostFx.pending;
