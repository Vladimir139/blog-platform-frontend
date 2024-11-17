import "normalize.css";

import type { AppProps } from "next/app";
import { FC } from "react";

import { App } from "@/app";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <App>
    {/* @ts-ignore */}
    <Component {...pageProps} />
  </App>
);

export default MyApp;
