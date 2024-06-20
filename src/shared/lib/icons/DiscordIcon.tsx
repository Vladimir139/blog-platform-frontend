import React, { FC } from "react";

export const DiscordIcon: FC<{ size?: "small" | "medium"; theme?: "dark" | "light" }> = ({
  size,
  theme,
}) => {
  // size small
  if (size === "small") {
    return (
      <svg
        width="22"
        height="16"
        viewBox="0 0 50 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.8301 5.08351C37.7037 0.318229 31.8336 0.452049 31.8336 0.452049L31.2338 1.16458C38.5175 3.43575 41.9023 6.77546 41.9023 6.77546C31.4814 0.812081 18.2079 0.855014 7.369 6.77546C7.369 6.77546 10.8822 3.25724 18.5945 0.986072L18.1664 0.451546C18.1664 0.451546 12.3391 0.318231 6.16989 5.08276C6.16989 5.08276 0 16.6169 0 30.8231C0 30.8231 3.59928 37.2361 13.0679 37.5479C13.0679 37.5479 14.6531 35.5884 15.9383 33.8962C10.4973 32.2042 8.44047 28.6857 8.44047 28.6857C11.8592 30.9092 15.3156 32.3009 19.6232 33.1839C26.6315 34.6833 35.349 33.1417 41.86 28.6857C41.86 28.6857 39.7176 32.2931 34.1049 33.9406C35.3901 35.5884 36.9328 37.5035 36.9328 37.5035C46.4014 37.1917 50 30.7786 50 30.8236C49.9995 16.6174 43.8301 5.08351 43.8301 5.08351ZM17.0093 26.6819C14.6099 26.6819 12.6391 24.4997 12.6391 21.7833C12.8146 15.2774 21.248 15.2975 21.3796 21.7833C21.3796 24.4997 19.4511 26.6819 17.0093 26.6819ZM32.6474 26.6819C30.2479 26.6819 28.2771 24.4997 28.2771 21.7833C28.4696 15.2902 36.7979 15.2874 37.0176 21.7833C37.0176 24.4997 35.0896 26.6819 32.6474 26.6819Z"
          fill={theme === "dark" ? "black" : "white"}
        />
      </svg>
    );
  }

  // size medium
  if (size === "medium") {
    return (
      <svg
        width="50"
        height="38"
        viewBox="0 0 50 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.8301 5.08351C37.7037 0.318229 31.8336 0.452049 31.8336 0.452049L31.2338 1.16458C38.5175 3.43575 41.9023 6.77546 41.9023 6.77546C31.4814 0.812081 18.2079 0.855014 7.369 6.77546C7.369 6.77546 10.8822 3.25724 18.5945 0.986072L18.1664 0.451546C18.1664 0.451546 12.3391 0.318231 6.16989 5.08276C6.16989 5.08276 0 16.6169 0 30.8231C0 30.8231 3.59928 37.2361 13.0679 37.5479C13.0679 37.5479 14.6531 35.5884 15.9383 33.8962C10.4973 32.2042 8.44047 28.6857 8.44047 28.6857C11.8592 30.9092 15.3156 32.3009 19.6232 33.1839C26.6315 34.6833 35.349 33.1417 41.86 28.6857C41.86 28.6857 39.7176 32.2931 34.1049 33.9406C35.3901 35.5884 36.9328 37.5035 36.9328 37.5035C46.4014 37.1917 50 30.7786 50 30.8236C49.9995 16.6174 43.8301 5.08351 43.8301 5.08351ZM17.0093 26.6819C14.6099 26.6819 12.6391 24.4997 12.6391 21.7833C12.8146 15.2774 21.248 15.2975 21.3796 21.7833C21.3796 24.4997 19.4511 26.6819 17.0093 26.6819ZM32.6474 26.6819C30.2479 26.6819 28.2771 24.4997 28.2771 21.7833C28.4696 15.2902 36.7979 15.2874 37.0176 21.7833C37.0176 24.4997 35.0896 26.6819 32.6474 26.6819Z"
          fill={theme === "dark" ? "black" : "white"}
        />
      </svg>
    );
  }

  // size big
  return (
    <svg width="55" height="41" viewBox="0 0 50 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M43.8301 5.08351C37.7037 0.318229 31.8336 0.452049 31.8336 0.452049L31.2338 1.16458C38.5175 3.43575 41.9023 6.77546 41.9023 6.77546C31.4814 0.812081 18.2079 0.855014 7.369 6.77546C7.369 6.77546 10.8822 3.25724 18.5945 0.986072L18.1664 0.451546C18.1664 0.451546 12.3391 0.318231 6.16989 5.08276C6.16989 5.08276 0 16.6169 0 30.8231C0 30.8231 3.59928 37.2361 13.0679 37.5479C13.0679 37.5479 14.6531 35.5884 15.9383 33.8962C10.4973 32.2042 8.44047 28.6857 8.44047 28.6857C11.8592 30.9092 15.3156 32.3009 19.6232 33.1839C26.6315 34.6833 35.349 33.1417 41.86 28.6857C41.86 28.6857 39.7176 32.2931 34.1049 33.9406C35.3901 35.5884 36.9328 37.5035 36.9328 37.5035C46.4014 37.1917 50 30.7786 50 30.8236C49.9995 16.6174 43.8301 5.08351 43.8301 5.08351ZM17.0093 26.6819C14.6099 26.6819 12.6391 24.4997 12.6391 21.7833C12.8146 15.2774 21.248 15.2975 21.3796 21.7833C21.3796 24.4997 19.4511 26.6819 17.0093 26.6819ZM32.6474 26.6819C30.2479 26.6819 28.2771 24.4997 28.2771 21.7833C28.4696 15.2902 36.7979 15.2874 37.0176 21.7833C37.0176 24.4997 35.0896 26.6819 32.6474 26.6819Z"
        fill={theme === "dark" ? "black" : "white"}
      />
    </svg>
  );
};
