import { ContextType, ImageType } from "@/app/lib/definitions";
import { PropsWithChildren, createContext, useContext, useState } from "react";

export const ManagerContext = createContext<ContextType | undefined>(undefined);

export const ManagerProvider = ({ children }: PropsWithChildren<{}>) => {
  const [managerActive, setManagerActive] =
    useState<ContextType["managerActive"]>(false);
  const [loadedImages, setLoadedImages] = useState<ContextType["loadedImages"]>(
    []
  );
  const [selectedImages, setSelectedImages] = useState<
    ContextType["selectedImages"]
  >([]);
  const [currentModify, setCurrentModify] = useState<
    ContextType["currentModify"]
  >({} as ImageType);
  const [modifiedImages, setModifiedImages] = useState<
    ContextType["modifiedImages"]
  >([]);
  const [deletedImages, setDeletedImages] = useState<
    ContextType["deletedImages"]
  >([]);
  const [addedImages, setAddedImages] = useState<ContextType["addedImages"]>(
    []
  );

  return (
    <ManagerContext.Provider
      value={{
        managerActive,
        loadedImages,
        selectedImages,
        currentModify,
        modifiedImages,
        deletedImages,
        addedImages,
        setManagerActive,
        setLoadedImages,
        setSelectedImages,
        setCurrentModify,
        setModifiedImages,
        setDeletedImages,
        setAddedImages,
      }}
    >
      {children}
    </ManagerContext.Provider>
  );
};

export const useManagerContext = () => {
  const context = useContext(ManagerContext);
  if (!context) {
    throw new Error(
      "useManagerContext must be used inside the ManagerProvider"
    );
  }
  return context;
};
