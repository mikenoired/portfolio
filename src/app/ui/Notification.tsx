import { NotificationSettings } from "@/app/lib/definitions";
import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect } from "react";

interface NotificationProps {
  settings: NotificationSettings | undefined;
  setSettings: Dispatch<SetStateAction<NotificationSettings | undefined>>;
}

export default function Notification({
  settings,
  setSettings,
}: NotificationProps) {
  useEffect(() => {
    setTimeout(() => setSettings(undefined), 3000);
  });

  return (
    <motion.div
      onClick={() => setSettings(undefined)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.2, ease: [0.32, 0.23, 0.4, 0.9] }}
      className={cn(
        "absolute bottom-4 right-4 p-5 text-lg font-semibold cursor-pointer z-[60] text-black",
        settings?.status === "normal" && "bg-white",
        settings?.status === "warning" && "bg-orange",
        settings?.status === "error" && "bg-red",
        settings?.status === "success" && "bg-green",
      )}
    >
      {settings?.text}
    </motion.div>
  );
}
