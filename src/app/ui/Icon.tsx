"use client";

import { useState } from "react";

export default function Icon({
  type,
  dark,
  width,
  height,
}: {
  type: string;
  dark: boolean;
  width: number;
  height: number;
}) {
  const [iconTheme] = useState(dark ? "#101010" : "#ebebeb");
  return (
    <div
      className='flex justify-center items-center'
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {(() => {
        switch (type) {
          case "close":
            return (
              <svg viewBox='0 0 22 22' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M11.2929 12.4142L20.5858 21.7071L22 20.2929L12.7071 11L22 1.70712L20.5858 0.292908L11.2929 9.5858L2 0.292908L0.585785 1.70712L9.87868 11L0.585785 20.2929L2 21.7071L11.2929 12.4142Z'
                  fill={iconTheme}
                />
              </svg>
            );
          case "done":
            return (
              <svg viewBox='0 0 20 18' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M20.0003 1.30948L6.29111 17.1359L0.407227 11.367L1.80742 9.93889L6.17226 14.2184L18.4886 0L20.0003 1.30948Z'
                  fill={iconTheme}
                />
              </svg>
            );
          case "menu":
            return (
              <svg viewBox='0 0 22 22' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M22 2H0V0H22V2Z'
                  fill={iconTheme}
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M22 12H0V10H22V12Z'
                  fill={iconTheme}
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M22 22H0V20H22V22Z'
                  fill={iconTheme}
                />
              </svg>
            );
          case "arrowDown":
            return (
              <svg viewBox='0 0 13 10' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6.96692 10L0.966918 1.04907e-06L12.9669 0L6.96692 10Z'
                  fill={iconTheme}
                />
              </svg>
            );
        }
      })()}
    </div>
  );
}
