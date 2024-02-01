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
  loadedMedia: MediaType[];
  selectedMedia: string[];
  currentModify: MediaType;
  setLoadedMedia: (images: MediaType[]) => void;
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

export interface MetaSettings {
  title: string;
  description: string;
  locale: "en_US" | "ru_RU";
  category: string;
  keywords: string[];
  creator: string;
  robots: {
    index: boolean;
    follow: boolean;
    nocache: boolean;
    googleBot: {
      index: boolean;
      follow: boolean;
      noimageindex: boolean;
      maxVideoPreview: 0 | -1;
      maxImagePreview: "none" | "standart" | "large";
      maxSnippet: 0 | -1;
    };
  };
  icons: {
    icon: string;
    shortcut: string;
    apple: string;
    other: {
      rel: string;
      url: string;
    };
  };
  manifest: string;
  appleWebApp: {
    title: string;
    statusBarStyle: "default" | "black-translucent" | "black";
    startupImage: [
      string,
      {
        url: string;
        media: "(device-width: 768px) and (device-height: 1024px)";
      }
    ];
  };
}

export interface ViewportSettings {
  themeColor: "black";
  width: string;
  initialScale: number;
  maximumScale: number;
  userScalable: boolean;
}
