import { fetchMediaByType } from "@/server/media";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const type = await request.json();
  const data = await fetchMediaByType(type);

  return NextResponse.json(data);
}
