import { FC } from "react";

import { AppProps } from "./types";

export const App: FC<AppProps> = ({ children }) => (
  <div>
    <main>{children}</main>
  </div>
);
