import { NextResponse } from "next/server";
import { fetchImages } from "@/app/lib/actions";

export async function GET(request: Request): Promise<NextResponse> {
  const data = await fetchImages();

  return NextResponse.json(data);
}
