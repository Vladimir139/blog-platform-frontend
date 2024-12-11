import { IUser } from "@/entities/user/model/types";

export interface IPost {
  id: number;
  title: string;
  featured: boolean;
  likes: number;
  userId: number;
  author: IUser;
  shortDesc: string;
  content: string;
  previewImage: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreatePostProps {
  title: string;
  featured: boolean;
  shortDesc: string;
  content: string;
  previewImage: string;
}
