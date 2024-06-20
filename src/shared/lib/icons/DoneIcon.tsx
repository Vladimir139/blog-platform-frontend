import React, { FC } from "react";

export const DoneIcon: FC = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="28" height="28" rx="14" fill="url(#paint0_linear_6765_300)" />
    <rect x="1" y="1" width="28" height="28" rx="14" stroke="white" strokeWidth="2" />
    <path d="M9 15.0329L12.9787 18.9996L20.9787 11" stroke="white" strokeWidth="2" />
    <defs>
      <linearGradient
        id="paint0_linear_6765_300"
        x1="-15"
        y1="-4.5"
        x2="37.5"
        y2="33"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF8A00" />
        <stop offset="1" stopColor="#AD00FF" />
      </linearGradient>
    </defs>
  </svg>
);
