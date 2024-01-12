export type Works = {
  title: string;
  url: string;
  thumbnail: string;
  images?: WorkImage[];
};

export type WorkImage = {
  url: string;
  caption: string;
};

export const data = [
  {
    title: "Studio",
    url: "studio",
    thumbnail: "/upload/street-thumb.png",
    images: [
      {
        url: "/upload/1.jpg",
        caption: "12441242",
      },
      {
        url: "/upload/2.jpg",
        caption: "12441242",
      },
      {
        url: "/upload/3.jpg",
        caption: "12441242",
      },
      {
        url: "/upload/4.jpg",
        caption: "12441242",
      },
    ],
  },
  {
    title: "Street",
    url: "street",
    thumbnail: "/upload/street-thumb.png",
    images: [
      {
        url: "/upload/5.jpg",
        caption: "12441242",
      },
      {
        url: "/upload/6.jpg",
        caption: "12441242",
      },
      {
        url: "/upload/7.jpg",
        caption: "12441242",
      },
      {
        url: "/upload/8.jpg",
        caption: "12441242",
      },
    ],
  },
  {
    title: "Landscape",
    url: "land",
    thumbnail: "/upload/street-thumb.png",
    images: [
      {
        url: "/upload/9.jpg",
        caption: "12441242",
      },
      {
        url: "/upload/10.jpg",
        caption: "12441242",
      },
      {
        url: "/upload/11.jpg",
        caption: "12441242",
      },
      {
        url: "/upload/1.jpg",
        caption: "12441242",
      },
    ],
  },
  {
    title: "Print",
    url: "print",
    thumbnail: "/upload/street-thumb.png",
    images: [
      {
        url: "/upload/2.jpg",
        caption: "12441242",
      },
      {
        url: "/upload/3.jpg",
        caption: "12441242",
      },
      {
        url: "/upload/4.jpg",
        caption: "12441242",
      },
      {
        url: "/upload/5.jpg",
        caption: "12441242",
      },
    ],
  },
];
