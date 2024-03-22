"use client";

import { motion } from "framer-motion";

export default function Heading({ name }: { name: string[] }) {
  return (
    <div className="flex absolute right-[0px] -z-10 overflow-hidden opacity-20 text-[91px] sm:text-[133px] md:text-[190px] font-bold leading-[68px] md:leading-[128px] sm:leading-[88px]">
      {name.map((symbol, index) => (
        <motion.div
          initial={{
            opacity: 0,
          }}
          transition={{
            delay: index * 0.1,
          }}
          animate={{
            opacity: 1,
          }}
          key={index}
        >
          <span>{symbol}</span>
        </motion.div>
      ))}
    </div>
  );
}
