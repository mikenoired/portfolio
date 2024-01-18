import { NextResponse } from "next/server";
import { updateCaption } from "@/app/lib/actions";

export async function POST(request: Request): Promise<NextResponse> {
  const data = await request.json();
  const res = await updateCaption(data.url, data.caption);
  return NextResponse.json(res);
}
