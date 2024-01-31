import { fetchMedia } from "@/app/lib/actions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const type = await request.json();
  const data = await fetchMedia(type);

  return NextResponse.json(data);
}
