import React, { FC } from "react";

export const ManWithKeyIcon: FC<{ isSmall?: boolean }> = ({ isSmall }) => {
  if (isSmall) {
    return (
      <svg
        width="28"
        height="36"
        viewBox="0 0 40 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.2027 25.2052C39.2027 24.0859 38.7434 23.6287 37.6153 23.6261C35.3777 23.6261 33.1427 23.6261 30.905 23.6261H27.2446L27.2181 23.4579C26.435 18.4081 23.7727 14.911 19.077 12.767L18.8169 12.6488L19.0213 12.4491C20.5157 10.983 21.3253 9.08078 21.2961 7.09971C21.2696 5.24739 20.5077 3.43973 19.2018 2.13917C16.5527 -0.501375 12.3747 -0.724704 9.47874 1.62157C8.0666 2.76712 7.20129 4.21745 6.91196 5.9384C6.49788 8.38714 7.23314 10.581 9.09653 12.4544L9.28498 12.6462L8.89213 12.8485C8.80454 12.8931 8.72755 12.9326 8.65057 12.972C3.61784 15.4233 0.990011 19.4485 0.83871 24.9398C0.777659 27.1363 0.796249 29.3749 0.81483 31.5398C0.820139 32.223 0.825428 32.9087 0.828083 33.5919C0.8387 36.1588 2.66492 37.9691 5.26888 37.9954C5.55555 37.998 5.84224 37.9954 6.14484 37.9954H6.7925V38.7678C6.7925 39.6375 6.7925 40.5046 6.79515 41.3742C6.80046 43.618 6.80579 45.9354 6.77659 48.216C6.76597 49.1408 7.05264 49.6768 7.72951 50H20.3671C21.0466 49.6768 21.3306 49.1382 21.32 48.216C21.2935 45.9328 21.2988 43.6128 21.3014 41.369C21.3014 40.5019 21.3041 39.6349 21.3041 38.7678V37.9954H21.5032C21.6412 37.9954 21.7739 37.9954 21.9066 37.998C22.188 38.0033 22.4561 38.0059 22.7162 37.9901L22.9286 37.977C23.3081 37.956 23.6983 37.9323 24.0514 37.8351C26.0554 37.286 27.2579 35.7017 27.2685 33.5892C27.2765 32.0496 27.2738 30.5125 27.2712 28.9729V26.2167H30.6502V27.7091C30.6502 28.7022 30.6475 29.6875 30.6502 30.6702C30.6502 31.1063 30.7988 31.4873 31.059 31.7422C31.2899 31.9681 31.5925 32.0863 31.9376 32.0863H31.9482C32.7127 32.0811 33.2276 31.5057 33.2303 30.6518C33.2356 29.7821 33.2329 28.9124 33.2303 28.0454V26.2141H36.6093V27.8667C36.6093 28.8152 36.6093 29.7611 36.6093 30.7096C36.6093 31.3297 36.8668 31.7474 37.4003 31.9839C37.7932 32.1573 38.2232 32.1284 38.5789 31.9024C38.9558 31.6633 39.1841 31.2377 39.1894 30.7648C39.2027 29.3854 39.2 27.9823 39.1974 26.624V25.2078L39.2027 25.2052ZM10.7396 3.95208C11.6341 3.05876 12.8047 2.56744 14.0417 2.56744H14.0549C16.6217 2.57532 18.7107 4.64834 18.716 7.18642C18.7214 9.72186 16.635 11.7949 14.0655 11.8133H14.0363C11.4961 11.8133 9.40973 9.76127 9.38053 7.2232C9.36726 6.00671 9.85036 4.8454 10.7422 3.95471L10.7396 3.95208ZM22.7295 35.4363C22.3366 35.4363 21.9464 35.4363 21.5536 35.4363C21.1183 35.4363 20.6803 35.4363 20.245 35.4363C19.2204 35.4389 18.724 35.9302 18.7214 36.9313C18.7214 39.1698 18.7214 41.411 18.7214 43.6496V47.4199H9.37525V44.0594C9.37525 41.7105 9.37525 39.359 9.37525 37.0101C9.37525 35.8961 8.91338 35.4389 7.78261 35.4389C7.47736 35.4389 7.17474 35.4389 6.87214 35.4389C6.31472 35.4389 5.75463 35.4415 5.1972 35.4363C4.11687 35.4232 3.41877 34.7269 3.41612 33.6654C3.41612 32.9586 3.4108 32.2519 3.40815 31.5477C3.39753 29.3381 3.38958 27.0549 3.42409 24.8058C3.50372 19.8426 6.76861 15.8516 11.7403 14.6377C14.538 13.9546 17.5826 14.5537 20.099 16.2799C22.5968 17.9929 24.2186 20.5836 24.5504 23.3896L24.5769 23.6103H21.2351L21.1979 23.4606C20.1016 19.0281 16.0272 17.2573 12.7516 17.8405C9.30092 18.4554 6.74207 21.5426 6.80047 25.0239C6.85621 28.4579 9.44954 31.4558 12.8312 31.9996C16.0882 32.5225 20.1229 30.728 21.1873 26.3691L21.2244 26.2193H24.6592L24.6778 26.5635C24.6858 26.6765 24.6911 26.7895 24.6911 26.8998C24.6911 29.099 24.6911 31.2955 24.6911 33.492C24.6911 34.7821 24.0328 35.4389 22.7348 35.4415L22.7295 35.4363ZM18.716 24.974C18.6523 27.5068 16.5846 29.5299 14.0868 29.5299C14.0549 29.5299 14.0231 29.5299 13.9912 29.5299C12.7357 29.5036 11.5147 28.965 10.6414 28.0506C9.784 27.1547 9.3354 26.0039 9.37787 24.8137C9.46812 22.2441 11.6023 20.2131 14.1266 20.2867C16.7199 20.3629 18.7797 22.4648 18.7134 24.974H18.716Z"
          fill="url(#paint0_linear_6738_109)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6738_109"
            x1="-3.6496"
            y1="-5.02544"
            x2="45.0959"
            y2="36.0932"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF8A00" />
            <stop offset="1" stopColor="#AD00FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M39.2027 25.2052C39.2027 24.0859 38.7434 23.6287 37.6153 23.6261C35.3777 23.6261 33.1427 23.6261 30.905 23.6261H27.2446L27.2181 23.4579C26.435 18.4081 23.7727 14.911 19.077 12.767L18.8169 12.6488L19.0213 12.4491C20.5157 10.983 21.3253 9.08078 21.2961 7.09971C21.2696 5.24739 20.5077 3.43973 19.2018 2.13917C16.5527 -0.501375 12.3747 -0.724704 9.47874 1.62157C8.0666 2.76712 7.20129 4.21745 6.91196 5.9384C6.49788 8.38714 7.23314 10.581 9.09653 12.4544L9.28498 12.6462L8.89213 12.8485C8.80454 12.8931 8.72755 12.9326 8.65057 12.972C3.61784 15.4233 0.990011 19.4485 0.83871 24.9398C0.777659 27.1363 0.796249 29.3749 0.81483 31.5398C0.820139 32.223 0.825428 32.9087 0.828083 33.5919C0.8387 36.1588 2.66492 37.9691 5.26888 37.9954C5.55555 37.998 5.84224 37.9954 6.14484 37.9954H6.7925V38.7678C6.7925 39.6375 6.7925 40.5046 6.79515 41.3742C6.80046 43.618 6.80579 45.9354 6.77659 48.216C6.76597 49.1408 7.05264 49.6768 7.72951 50H20.3671C21.0466 49.6768 21.3306 49.1382 21.32 48.216C21.2935 45.9328 21.2988 43.6128 21.3014 41.369C21.3014 40.5019 21.3041 39.6349 21.3041 38.7678V37.9954H21.5032C21.6412 37.9954 21.7739 37.9954 21.9066 37.998C22.188 38.0033 22.4561 38.0059 22.7162 37.9901L22.9286 37.977C23.3081 37.956 23.6983 37.9323 24.0514 37.8351C26.0554 37.286 27.2579 35.7017 27.2685 33.5892C27.2765 32.0496 27.2738 30.5125 27.2712 28.9729V26.2167H30.6502V27.7091C30.6502 28.7022 30.6475 29.6875 30.6502 30.6702C30.6502 31.1063 30.7988 31.4873 31.059 31.7422C31.2899 31.9681 31.5925 32.0863 31.9376 32.0863H31.9482C32.7127 32.0811 33.2276 31.5057 33.2303 30.6518C33.2356 29.7821 33.2329 28.9124 33.2303 28.0454V26.2141H36.6093V27.8667C36.6093 28.8152 36.6093 29.7611 36.6093 30.7096C36.6093 31.3297 36.8668 31.7474 37.4003 31.9839C37.7932 32.1573 38.2232 32.1284 38.5789 31.9024C38.9558 31.6633 39.1841 31.2377 39.1894 30.7648C39.2027 29.3854 39.2 27.9823 39.1974 26.624V25.2078L39.2027 25.2052ZM10.7396 3.95208C11.6341 3.05876 12.8047 2.56744 14.0417 2.56744H14.0549C16.6217 2.57532 18.7107 4.64834 18.716 7.18642C18.7214 9.72186 16.635 11.7949 14.0655 11.8133H14.0363C11.4961 11.8133 9.40973 9.76127 9.38053 7.2232C9.36726 6.00671 9.85036 4.8454 10.7422 3.95471L10.7396 3.95208ZM22.7295 35.4363C22.3366 35.4363 21.9464 35.4363 21.5536 35.4363C21.1183 35.4363 20.6803 35.4363 20.245 35.4363C19.2204 35.4389 18.724 35.9302 18.7214 36.9313C18.7214 39.1698 18.7214 41.411 18.7214 43.6496V47.4199H9.37525V44.0594C9.37525 41.7105 9.37525 39.359 9.37525 37.0101C9.37525 35.8961 8.91338 35.4389 7.78261 35.4389C7.47736 35.4389 7.17474 35.4389 6.87214 35.4389C6.31472 35.4389 5.75463 35.4415 5.1972 35.4363C4.11687 35.4232 3.41877 34.7269 3.41612 33.6654C3.41612 32.9586 3.4108 32.2519 3.40815 31.5477C3.39753 29.3381 3.38958 27.0549 3.42409 24.8058C3.50372 19.8426 6.76861 15.8516 11.7403 14.6377C14.538 13.9546 17.5826 14.5537 20.099 16.2799C22.5968 17.9929 24.2186 20.5836 24.5504 23.3896L24.5769 23.6103H21.2351L21.1979 23.4606C20.1016 19.0281 16.0272 17.2573 12.7516 17.8405C9.30092 18.4554 6.74207 21.5426 6.80047 25.0239C6.85621 28.4579 9.44954 31.4558 12.8312 31.9996C16.0882 32.5225 20.1229 30.728 21.1873 26.3691L21.2244 26.2193H24.6592L24.6778 26.5635C24.6858 26.6765 24.6911 26.7895 24.6911 26.8998C24.6911 29.099 24.6911 31.2955 24.6911 33.492C24.6911 34.7821 24.0328 35.4389 22.7348 35.4415L22.7295 35.4363ZM18.716 24.974C18.6523 27.5068 16.5846 29.5299 14.0868 29.5299C14.0549 29.5299 14.0231 29.5299 13.9912 29.5299C12.7357 29.5036 11.5147 28.965 10.6414 28.0506C9.784 27.1547 9.3354 26.0039 9.37787 24.8137C9.46812 22.2441 11.6023 20.2131 14.1266 20.2867C16.7199 20.3629 18.7797 22.4648 18.7134 24.974H18.716Z"
        fill="url(#paint0_linear_6738_109)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6738_109"
          x1="-3.6496"
          y1="-5.02544"
          x2="45.0959"
          y2="36.0932"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8A00" />
          <stop offset="1" stopColor="#AD00FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
