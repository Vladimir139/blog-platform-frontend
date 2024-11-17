import { useUnit } from "effector-react";

import { $user } from "@/entities/user/model";

export const useAuth = () => {
  const user = useUnit($user);

  return {
    isAuth: !!user,
  };
};
