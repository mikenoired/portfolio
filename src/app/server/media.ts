import prisma from "@/app/lib/utils";
import { writeFile } from "fs/promises";
import { unstable_noStore as noStore } from "next/cache";

export async function loadMedia(imageValue: FormDataEntryValue | null) {
  const image = imageValue as File;
  if (image.size !== 0) {
    const arrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const filename = `${Date.now()}-${image.name.replaceAll(" ", "_")}`;
    const uploadDir = `./public/upload/${filename}`;

    writeFile(uploadDir, buffer);

    const fileType = (type: string) => {
      switch (type) {
        case "image/jpeg":
        case "image/png":
        case "image/gif":
        case "image/webp":
          return "image";
        case "image/x-icon":
          return "icon";
        case "video/mpeg":
        case "video/mp4":
        case "video/webm":
          return "video";
        case "audio/webm":
        case "audio/wav":
        case "audio/ogg":
        case "audio/mp4":
        case "audio/mp3":
        case "audio/mpeg":
        case "audio/flac":
          return "audio";
        default:
          return "undefined";
      }
    };

    const data = {
      url: filename,
      caption: "",
      size: String(image.size),
      lastModified: String(image.lastModified),
      type: fileType(image.type),
    };

    const res = await prisma.media.create({ data });

    return data;
  } else {
    return { url: "" };
  }
}

export async function fetchMediaByType(type: { type: "" }) {
  noStore();
  const res = await prisma.media.findMany({
    where: {
      type: type.type,
    },
  });
  return res;
}

export async function updateCaption(url: string, caption: string) {
  const res = await prisma.media.update({
    where: { url },
    data: {
      caption,
    },
  });
  return res;
}

export async function fetchMediaByURLs(url: string[]) {
  noStore();
  console.log(url);
  const res = await prisma.media.findMany({
    where: {
      url: {
        in: url,
      },
    },
  });
  console.log(res);
  return res;
}
