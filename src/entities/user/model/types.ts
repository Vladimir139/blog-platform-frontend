import { IPost } from "@/entities/posts/model/types";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  posts: IPost[];
  createdAt: Date;
}
