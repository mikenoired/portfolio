export type QNAForm = {
  id: number;
  title: string;
  content: string;
};

export type WorkCat = {
  title: string;
  url: string;
  thumbnail: string;
  images: WorkImage[];
};

export type WorkImage = {
  id: number;
  url: string;
  caption: string;
};
