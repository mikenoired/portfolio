import { deleteMedia } from "@/server/media";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  const { url } = await request.json();

  const res = await deleteMedia(url);

  return NextResponse.json(res);
}
