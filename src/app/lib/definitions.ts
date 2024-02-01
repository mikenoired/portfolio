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
  locale: [
    {
      data: "ru_RU";
      selected: false;
    },
    {
      data: "en_US";
      selected: true;
    }
  ];
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
      maxVideoPreview: [
        {
          data: 0;
          selected: false;
        },
        {
          data: -1;
          selected: true;
        }
      ];
      maxImagePreview: [
        {
          data: "none";
          selected: false;
        },
        {
          data: "standart";
          selected: true;
        },
        {
          data: "large";
          selected: false;
        }
      ];
      maxSnippet: [
        {
          data: 0;
          selected: false;
        },
        {
          data: -1;
          selected: true;
        }
      ];
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
    statusBarStyle: [
      {
        data: "default";
        selected: true;
      },
      {
        data: "black-translucent";
        selected: false;
      },
      {
        data: "black";
        selected: false;
      }
    ];
    startupImage: {
      base: string;
      device: {
        url: string;
        media: "(device-width: 768px) and (device-height: 1024px)";
      };
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
