import { AxiosPromise } from "axios";

import { IPost } from "@/entities/posts/model/types";
import { axios } from "@/shared/lib/api/base";
import { postsUrls } from "@/shared/lib/api/posts/urls";

export const postsApi = {
  getAllPosts: async (): Promise<AxiosPromise<IPost[]>> => axios.get(postsUrls.getAllPosts),
  getMePosts: async (): Promise<AxiosPromise<IPost[]>> => axios.get(postsUrls.getMePosts),
  createPost: async (): Promise<AxiosPromise<IPost>> => axios.get(postsUrls.createPost),
  updatePost: async (postId: number): Promise<AxiosPromise<IPost>> =>
    axios.get(postsUrls.updatePost(postId)),
  deletePost: async (postId: number): Promise<AxiosPromise<void>> =>
    axios.get(postsUrls.deletePost(postId)),
  getPost: async (postId: number): Promise<AxiosPromise<IPost>> =>
    axios.get(postsUrls.getPost(postId)),
  likePost: async (postId: number): Promise<AxiosPromise<{ likes: number }>> =>
    axios.get(postsUrls.likePost(postId)),
};
