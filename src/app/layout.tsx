"use client";

import AuthProvider from "@/app/context/AuthProvider";
import grain from "@/app/ui/grain";
import { Onest } from "next/font/google";
import localFont from "next/font/local";
import { MutableRefObject, useEffect, useRef } from "react";
import HeaderProvider from "./context/HeaderProvider";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
});
const symLinkFont = localFont({
  src: "./fonts/symlink.woff2",
  display: "swap",
  variable: "--font-symlink",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const grainedCont = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const options = {
      animate: true,
      patternWidth: 500,
      patternHeight: 500,
      grainOpacity: 0.2,
      grainDensity: 1,
      grainWidth: 0.5,
      grainHeight: 0.5,
      grainChaos: 0.2,
      grainSpeed: 2,
    };
    grain(grainedCont.current, options);
  });
  return (
    <html lang="en">
      <AuthProvider>
        <HeaderProvider>
          <body
            className={`${onest.className} ${symLinkFont.variable} overflow-y-hidden bg-black text-white`}
          >
            {children}
            <div
              ref={grainedCont}
              id="container"
              className="fixed top-[0px] -z-50 h-dvh w-dvw"
            />
          </body>
        </HeaderProvider>
      </AuthProvider>
    </html>
  );
}
