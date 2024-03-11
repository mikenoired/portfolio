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

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
