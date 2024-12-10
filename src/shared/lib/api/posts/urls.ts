export const postsUrls = {
  getAllPosts: "/posts",
  getUserPosts: "/user/posts",
  createPost: "/posts",
  updatePost: (postId: number) => `/posts/${postId}`,
  deletePost: (postId: number) => `/posts/${postId}`,
  getPost: (postId: number) => `/posts/${postId}`,
  likePost: (postId: number) => `/posts/${postId}/like`,
};
