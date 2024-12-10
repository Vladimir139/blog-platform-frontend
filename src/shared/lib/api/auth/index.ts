import { resetUser } from "@/entities/user/model";
import { removeTokensStorage } from "@/shared/lib/helpers";

export const authApi = {
  register: () => {},
  login: () => {},
  refresh: () => {},
  logout: () => {
    removeTokensStorage();
    resetUser();
  },
};
