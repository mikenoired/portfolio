import { getCaption } from "@/app/server/media";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const res = await getCaption(data.url);
  return NextResponse.json(res);
}
