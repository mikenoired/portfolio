export type QNAForm = {
  id: number;
  title: string;
  content: string;
};

export type WorkCat = {
  title: string;
  url: string;
  thumbnail: string;
  images: string[];
};

export type ImageType = {
  id: number;
  url: string;
  caption: string;
  size: string;
  type: string;
  lastModified: string;
};

export type ContextType = {
  managerActive: boolean;
  loadedImages: ImageType[];
  selectedImages: string[];
  currentModify: ImageType;
  modifiedImages: ImageType[];
  deletedImages: string[];
  addedImages: File[];
  setLoadedImages: (images: ImageType[]) => void;
  setSelectedImages: (url: string[]) => void;
  setCurrentModify: (image: ImageType) => void;
  setModifiedImages: (image: ImageType[]) => void;
  setDeletedImages: (url: string[]) => void;
  setAddedImages: (file: File[]) => void;
  setManagerActive: (open: boolean) => void;
};