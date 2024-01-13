import { PrismaClient } from "@prisma/client";
import { writeFile } from "fs/promises";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export async function loadImage(imageValue: FormDataEntryValue | null) {
  const image = imageValue as File;
  const arrayBuffer = await image.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const filename = `${Date.now()}-${image.name}`;
  const uploadDir = `./public/upload/${filename}`;

  writeFile(uploadDir, buffer);

  return {
    filename,
    uploadDir,
  };
}
