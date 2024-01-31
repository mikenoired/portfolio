"use client";

import { useState } from "react";

export default function Icon({
  type,
  dark,
  width,
  height,
  className,
}: {
  type: string;
  dark: boolean;
  width: number;
  height: number;
  className?: string;
}) {
  const [iconTheme] = useState(dark ? "#101010" : "#ebebeb");
  return (
    <div
      className={`flex justify-center items-center ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {(() => {
        switch (type) {
          case "close":
            return (
              <svg viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M1.41422 0L0 1.41422L6.08585 7.50006L9.15527e-05 13.5858L1.41431 15L7.50006 8.91428L13.5858 15L15 13.5858L8.91428 7.50006L15.0001 1.41425L13.5859 3.05176e-05L7.50006 6.08585L1.41422 0Z'
                  fill={iconTheme}
                />
              </svg>
            );
          case "done":
            return (
              <svg viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M14.996 1L13.2639 0L6.18402 12.2697L1.00732 9.28095L0 11L6.91534 15.0031L6.91608 15.0018L14.996 1Z'
                  fill={iconTheme}
                />
              </svg>
            );
          case "menu":
            return (
              <svg viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0 0H15V2H0V0ZM0 6.5H15V8.5H0V6.5ZM15 13H0V15H15V13Z'
                  fill={iconTheme}
                />
              </svg>
            );
          case "arrowDown":
            return (
              <svg viewBox='0 0 15 12' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M7.5 12L-1.23285e-07 -1.84778e-06L15 -5.36442e-07L7.5 12Z'
                  fill={iconTheme}
                />
              </svg>
            );
          case "link":
            return (
              <svg viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M4.99995 0L15 0.0078125V10H13V3.41437L1.40665 15.0077L-0.00756836 13.5935L11.5859 2H4.99995V0Z'
                  fill={iconTheme}
                />
              </svg>
            );
          case "edit":
            return (
              <svg viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0 0H15V2H0V0ZM0 6.5H15V8.5H0V6.5ZM15 13H0V15H15V13Z'
                  fill={iconTheme}
                />
              </svg>
            );
          case "back":
            return (
              <svg viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M1.41431 6.08963L7.50192 0.00195312L8.91614 1.41617L3.82843 6.50388H15V8.50388H3.82855L8.91235 13.5877L7.49814 15.0019L1.41422 8.91809L0 7.50388L1.41431 6.08963Z'
                  fill={iconTheme}
                />
              </svg>
            );
        }
      })()}
    </div>
  );
}
