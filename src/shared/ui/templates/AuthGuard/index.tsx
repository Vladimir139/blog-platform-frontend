import { useUnit } from "effector-react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";

import { getMePosts } from "@/entities/posts/model";
import { $user, getMe } from "@/entities/user/model";
import { useAuth } from "@/shared/lib/hooks";

export const AuthGuard: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const user = useUnit($user);
  const { isAuth } = useAuth();

  const accessToken = Cookies.get("access_token");

  const privateRoutes = ["/profile", "/posts/create", "/posts/[id]/edit"];

  useEffect(() => {
    // Если пользователь не авторизован и находится на приватном роуте
    if (!accessToken && privateRoutes.includes(router.pathname)) {
      router.push("/auth");
    }

    if (accessToken && !user) {
      getMe();
      getMePosts();
    }
  }, [accessToken, isAuth, privateRoutes, router, router.pathname, user]);

  // Функция для проверки совпадения маршрутов (с поддержкой динамических сегментов)
  const matchRoute = (routePattern: string, currentPath: string): boolean => {
    const routeRegex = new RegExp(`^${routePattern.replace(/\[.*?\]/g, "[^/]+")}$`);
    return routeRegex.test(currentPath);
  };

  // Показываем null, пока идет проверка
  if (!isAuth && privateRoutes.some((route) => matchRoute(route, router.pathname))) {
    return null; // Можно добавить индикатор загрузки здесь
  }

  return <div>{children}</div>;
};
