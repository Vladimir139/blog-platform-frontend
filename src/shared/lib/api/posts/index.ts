import { AxiosPromise } from "axios";

import { CreatePostProps, IPost } from "@/entities/posts/model/types";
import { axios } from "@/shared/lib/api/base";
import { postsUrls } from "@/shared/lib/api/posts/urls";

export const postsApi = {
  getAllPosts: async (): Promise<AxiosPromise<IPost[]>> => axios.get(postsUrls.getAllPosts),
  getMePosts: async (): Promise<AxiosPromise<IPost[]>> => axios.get(postsUrls.getMePosts),
  createPost: async (payload: CreatePostProps): Promise<AxiosPromise<IPost>> =>
    axios.post(postsUrls.createPost, payload),
  updatePost: async (postId: string, payload: CreatePostProps): Promise<AxiosPromise<IPost>> =>
    axios.put(postsUrls.updatePost(postId), payload),
  deletePost: async (postId: string): Promise<AxiosPromise<void>> =>
    axios.delete(postsUrls.deletePost(postId)),
  getPost: async (postId: string): Promise<AxiosPromise<IPost>> =>
    axios.get(postsUrls.getPost(postId)),
  likePost: async (postId: string): Promise<AxiosPromise<{ likes: number }>> =>
    axios.post(postsUrls.likePost(postId)),
};
