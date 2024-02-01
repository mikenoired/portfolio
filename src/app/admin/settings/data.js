export const metaSettings = {
  title: "",
  description: "",
  locale: [
    {
      data: "ru_RU",
      selected: false,
    },
    {
      data: "en_US",
      selected: true,
    },
  ],
  category: "",
  keywords: "",
  creator: "",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: [
        {
          data: 0,
          selected: false,
        },
        {
          data: -1,
          selected: true,
        },
      ],
      maxImagePreview: [
        {
          data: "none",
          selected: false,
        },
        {
          data: "standart",
          selected: true,
        },
        {
          data: "large",
          selected: false,
        },
      ],
      maxSnippet: [
        {
          data: 0,
          selected: false,
        },
        {
          data: -1,
          selected: true,
        },
      ],
    },
  },
  icons: {
    icon: "",
    shortcut: "",
    apple: "",
    other: {
      rel: "",
      url: "",
    },
  },
  manifest: "",
  appleWebApp: {
    title: "",
    statusBarStyle: [
      {
        data: "default",
        selected: true,
      },
      {
        data: "black-translucent",
        selected: false,
      },
      {
        data: "black",
        selected: false,
      },
    ],
    startupImage: {
      base: "",
      device: {
        url: "",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    },
  },
};

export const viewportSettings = {
  themeColor: "",
  width: "",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};
