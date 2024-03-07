"use client";

import grain from "@/app/lib/grain";
import { Archivo } from "next/font/google";
import { MutableRefObject, useEffect, useRef } from "react";
import "./globals.css";
import { motion } from "framer-motion";

const archivo = Archivo({ subsets: ["latin"] });

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
      <body
        className={archivo.className + " overflow-y-hidden bg-black text-white"}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          {children}
        </motion.div>
        <div
          ref={grainedCont}
          id="container"
          className="fixed top-[0px] -z-50 h-dvh w-dvw"
        />
      </body>
    </html>
  );
}
