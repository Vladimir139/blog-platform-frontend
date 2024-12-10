import { useUnit } from "effector-react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";

import { $user, getMe } from "@/entities/user/model";
import { useAuth } from "@/shared/lib/hooks";

export const AuthGuard: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const user = useUnit($user);
  const { isAuth } = useAuth();
  const accessToken = Cookies.get("access_token");

  console.log("IsAuth", isAuth, user, accessToken);

  const privateRoutes = ["/profile", "/posts/create", "/posts/[id]/edit"];

  useEffect(() => {
    // const accessToken = Cookies.get("access_token");

    // Если пользователь не авторизован и находится на приватном роуте
    if (!accessToken && privateRoutes.includes(router.pathname)) {
      router.push("/auth");
    }

    // Если есть access_token, но нет объекта пользователя -> запрос на getMe
    if (accessToken && !isAuth) {
      getMe();
    }
  }, [isAuth, privateRoutes, router, router.pathname, user]);

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
