"use client";

import { ContextType, MediaType } from "@/app/lib/definitions";
import { PropsWithChildren, createContext, useContext, useState } from "react";

export const ManagerContext = createContext<ContextType | undefined>(undefined);

export function ManagerProvider({ children }: PropsWithChildren<{}>) {
  const [loadedMedia, setLoadedMedia] = useState<ContextType["loadedMedia"]>(
    []
  );
  const [selectedMedia, setSelectedMedia] = useState<
    ContextType["selectedMedia"]
  >([]);
  const [currentModify, setCurrentModify] = useState<
    ContextType["currentModify"]
  >({} as MediaType);

  return (
    <ManagerContext.Provider
      value={{
        loadedMedia,
        selectedMedia,
        currentModify,
        setLoadedMedia,
        setSelectedMedia,
        setCurrentModify,
      }}
    >
      {children}
    </ManagerContext.Provider>
  );
}

export function useManagerContext() {
  const context = useContext(ManagerContext);
  if (!context) {
    throw new Error(
      "useManagerContext must be used inside the ManagerProvider"
    );
  }
  return context;
}
