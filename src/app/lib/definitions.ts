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

export interface ISettingsForm {
  title: string;
  description: string;
  locale: "en_US" | "ru_RU";
  category: string;
  keywords: string;
  creator: string;
  manifest: string;
  robots_index: "on" | "off";
  robots_follow: "on" | "off";
  robots_nocache: "on" | "off";
  googleBot_index: "on" | "off";
  googleBot_follow: "on" | "off";
  googleBot_noImageIndex: "on" | "off";
  googleBot_maxVideoPreview: "-1" | "0";
  googleBot_maxImagePreview: "standart" | "none" | "large";
  googleBot_maxSnippet: "-1" | "0";
  icons_icon: string;
  icons_apple: string;
  icons_other_rel: string;
  icons_other_url: string;
  appleWebApp_title: string;
  appleWebApp_statusBarStyle: "default" | "black-translucent" | "black";
  appleWebApp_startupImage_base: string;
  appleWebApp_startupImage_device_url: string;
  appleWebApp_startupImage_device_media: string;
  themeColor: string;
  width: string;
  initialScale: string;
  maximumScale: string;
  userScalable: "on" | "off";
}

export interface ISettings {
  metadata: {
    title: string;
    description: string;
    locale: string;
    category: string;
    keywords: string[];
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
        "max-video-preview": number;
        "max-image-preview": string;
        "max-snippet": number;
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
      statusBarStyle: string;
      startupImage: [
        string,
        {
          url: string;
          media: string;
        }
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
