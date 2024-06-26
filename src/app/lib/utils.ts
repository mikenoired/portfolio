import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function formatDate(upd: string) {
  const date = new Date(Number(upd));
  const format = {
    hours: date.getUTCHours(),
    minutes: date.getUTCMinutes(),
    seconds: date.getUTCSeconds(),
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() == 0 ? "1" : date.getUTCMonth(),
    day: date.getUTCDay(),
  };
  return format;
}

export function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return "0 B";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["B", "KiB", "MiB", "GiB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
