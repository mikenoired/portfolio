"use client";

import { NotificationSettings } from "@/app/lib/definitions";
import Notification from "@/app/ui/Notification";
import { AnimatePresence } from "framer-motion";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface NotificationContextProps {
  settings: NotificationSettings | undefined;
  setSettings: Dispatch<SetStateAction<NotificationSettings | undefined>>;
}

export const NotificationContext = createContext<NotificationContextProps>({
  settings: undefined,
  setSettings: () => {},
});

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [settings, setSettings] = useState<NotificationSettings>();

  const showNotification = (settings: NotificationSettings) => {
    setSettings({
      text: settings.text,
      status: settings.status,
    });
  };

  const NotificationProviderValue = {
    settings,
    setSettings,
    showNotification,
  };

  return (
    <NotificationContext.Provider value={NotificationProviderValue}>
      <AnimatePresence initial={false}>
        {settings && (
          <Notification settings={settings} setSettings={setSettings} />
        )}
      </AnimatePresence>
      {children}
    </NotificationContext.Provider>
  );
};
