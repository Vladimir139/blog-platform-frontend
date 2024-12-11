export const postsUrls = {
  getAllPosts: "/posts",
  getMePosts: "/users/me/posts",
  createPost: "/posts",
  updatePost: (postId: string) => `/posts/${postId}`,
  deletePost: (postId: string) => `/posts/${postId}`,
  getPost: (postId: string) => `/posts/${postId}`,
  likePost: (postId: string) => `/posts/${postId}/like`,
};
