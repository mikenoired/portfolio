import { NextResponse } from "next/server";
import { loadImage } from "@/app/lib/actions";

export async function POST(request: Request): Promise<NextResponse> {
  const data = await request.formData();

  data.getAll("file").map((file) => loadImage(file));

  return NextResponse.json(data);
}
