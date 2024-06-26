"use client";

import { useState } from "react";

interface IconProps {
  type:
    | "close"
    | "done"
    | "menu"
    | "arrowDown"
    | "link"
    | "edit"
    | "left"
    | "right"
    | "arrowLeft"
    | "arrowRight"
    | "zoomIn"
    | "zoomOut";
  dark: boolean;
  width: number;
  height: number;
  className?: string;
}

export default function Icon({
  type,
  dark,
  width,
  height,
  className,
}: IconProps) {
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
              <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.41422 0L0 1.41422L6.08585 7.50006L9.15527e-05 13.5858L1.41431 15L7.50006 8.91428L13.5858 15L15 13.5858L8.91428 7.50006L15.0001 1.41425L13.5859 3.05176e-05L7.50006 6.08585L1.41422 0Z"
                  fill={iconTheme}
                />
              </svg>
            );
          case "done":
            return (
              <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.996 1L13.2639 0L6.18402 12.2697L1.00732 9.28095L0 11L6.91534 15.0031L6.91608 15.0018L14.996 1Z"
                  fill={iconTheme}
                />
              </svg>
            );
          case "menu":
            return (
              <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H15V2H0V0ZM0 6.5H15V8.5H0V6.5ZM15 13H0V15H15V13Z"
                  fill={iconTheme}
                />
              </svg>
            );
          case "arrowDown":
            return (
              <svg viewBox="0 0 15 12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.5 12L-1.23285e-07 -1.84778e-06L15 -5.36442e-07L7.5 12Z"
                  fill={iconTheme}
                />
              </svg>
            );
          case "link":
            return (
              <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.99995 0L15 0.0078125V10H13V3.41437L1.40665 15.0077L-0.00756836 13.5935L11.5859 2H4.99995V0Z"
                  fill={iconTheme}
                />
              </svg>
            );
          case "edit":
            return (
              <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 0.5L17.5355 4.03553L15.7249 5.8462L12.1893 2.31067L14 0.5ZM10.6068 3.89317L14.1424 7.42871L8.53546 13.0356L5.01547 13.0355V9.48454L10.6068 3.89317ZM15 9.36324L13.125 11.2382V16.125H1.875V4.875H6.76154L8.63654 3H0V18H15V9.36324Z"
                  fill={iconTheme}
                />
              </svg>
            );
          case "left":
            return (
              <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.50192 0.00195312L8.91614 1.41617L3.82843 6.50388H15V8.50388H3.82855L8.91235 13.5877L7.49814 15.0019L0 7.50388L7.50192 0.00195312Z"
                  fill={iconTheme}
                />
              </svg>
            );
          case "right":
            return (
              <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.49808 14.9999L6.08386 13.5857L11.1716 8.49802L5.68416e-07 8.49802L7.43262e-07 6.49802L11.1714 6.49802L6.08765 1.41421L7.50186 -6.55508e-07L15 7.49802L7.49808 14.9999Z"
                  fill={iconTheme}
                />
              </svg>
            );
          case "arrowLeft":
            return (
              <svg viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.50192 0L8.91614 1.41422L2.82843 7.50192L8.91235 13.5857L7.49814 14.9999L0 7.50192L7.50192 0Z"
                  fill={iconTheme}
                />
              </svg>
            );
          case "arrowRight":
            return (
              <svg viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.41409 14.9999L-0.000121947 13.5857L6.08758 7.49802L0.0036633 1.41421L1.41788 -6.55508e-07L8.91602 7.49802L1.41409 14.9999Z"
                  fill={iconTheme}
                />
              </svg>
            );
          case "zoomIn":
            return (
              <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6ZM9.47649 10.8908C8.49568 11.5892 7.29581 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 7.29585 11.5892 8.49576 10.8907 9.47659L15.0039 13.5898L13.5897 15.004L9.47649 10.8908ZM7 5H9V7H7V9H5V7H3V5H5V3H7V5Z"
                  fill={iconTheme}
                />
              </svg>
            );
          case "zoomOut":
            return (
              <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10ZM6 12C7.29581 12 8.49567 11.5892 9.47647 10.8908L13.5897 15.004L15.0039 13.5898L10.8907 9.47659C11.5892 8.49576 12 7.29586 12 6C12 2.68629 9.31372 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM9 5H3V7H9V5Z"
                  fill={iconTheme}
                />
              </svg>
            );
        }
      })()}
    </div>
  );
}
