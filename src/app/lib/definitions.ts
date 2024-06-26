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

export interface ISettings {
  metadata: {
    title: string;
    description: string;
    locale: { data: string | number; selected: boolean }[];
    category: string;
    keywords: string;
    creator: string;
    manifest: string;
    robots: {
      index: boolean;
      follow: boolean;
      nocache: boolean;
      googleBot: {
        index: boolean;
        follow: boolean;
        noimageindex: boolean;
        maxVideoPreview: { data: string | number; selected: boolean }[];
        maxImagePreview: { data: string | number; selected: boolean }[];
        maxSnippet: { data: string | number; selected: boolean }[];
      };
    };
    icons: {
      icon: string;
      apple: string;
      other: {
        rel: string;
        url: string;
      };
    };
    appleWebApp: {
      title: string;
      statusBarStyle: { data: string | number; selected: boolean }[];
      startupImage: [
        string,
        {
          url: string;
          media: string;
        },
      ];
    };
  };
  viewport: {
    themeColor: string;
    width: string;
    initialScale: number;
    maximumScale: number;
    userScalable: boolean;
  };
}

export interface NotificationSettings {
  text: string;
  status: "normal" | "warning" | "error" | "success";
}

export interface LinkType {
  id?: number;
  title: string;
  url: string;
}
