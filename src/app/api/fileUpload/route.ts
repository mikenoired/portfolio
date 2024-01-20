import { loadImage } from "@/app/lib/actions";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const data = await request.formData();

  data.getAll("file").map((file) => loadImage(file));

  return NextResponse.json(data);
}
