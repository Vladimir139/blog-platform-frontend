import { AxiosPromise } from "axios";

import { IUser } from "@/entities/user/model/types";
import { axios } from "@/shared/lib/api/base";
import { userUrls } from "@/shared/lib/api/user/urls";

export const userApi = {
  getMe: async (): Promise<AxiosPromise<IUser>> => axios.get(userUrls.getMe),
  getUser: async (id: number): Promise<AxiosPromise<IUser>> => axios.get(userUrls.getUser(id)),
  editMe: async (payload: IUser): Promise<AxiosPromise<IUser>> =>
    axios.put(userUrls.editMe, payload),
};
