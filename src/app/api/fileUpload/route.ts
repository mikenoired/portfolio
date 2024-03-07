import { loadMedia } from "@/server/media";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const data = await request.formData();

  data.getAll("file").map((file) => loadMedia(file));

  return NextResponse.json(data);
}
