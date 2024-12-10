import { authApi } from "./auth";
import { postsApi } from "./posts";
import { userApi } from "./user";

export const api = {
  user: userApi,
  posts: postsApi,
  auth: authApi,
};
