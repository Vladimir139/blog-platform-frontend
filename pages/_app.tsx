import "normalize.css";
import "@/shared/lib/styles/fonts.scss";
import "@/shared/lib/styles/global.scss";

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
