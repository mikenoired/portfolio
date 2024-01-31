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

export type MediaType = {
  id: number;
  url: string;
  caption: string;
  size: string;
  type: string;
  lastModified: string;
};

export type ContextType = {
  loadedImages: MediaType[];
  selectedMedia: string[];
  currentModify: MediaType;
  setLoadedImages: (images: MediaType[]) => void;
  setSelectedMedia: (url: string[]) => void;
  setCurrentModify: (image: MediaType) => void;
};

export type ThumbType = {
  id: number;
  media: string;
};

export type SocLinksType = {
  id: number;
  personCardId: number;
  name: string;
  url: string;
};

export type PersonType = {
  id: number;
  avatar: string;
  name: string;
  job: string;
  place: string;
  socials: SocLinksType[];
};

export type AboutType = {
  id: number;
  person: PersonType;
  personId: number;
  content: string;
};

export interface FileType {
  type: "image" | "video" | "audio" | "icon";
}
