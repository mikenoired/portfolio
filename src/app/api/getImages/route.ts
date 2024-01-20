import { fetchImages } from "@/app/lib/actions";
import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<NextResponse> {
  const data = await fetchImages();

  return NextResponse.json(data);
}
