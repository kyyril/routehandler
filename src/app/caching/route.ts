import { NextRequest, NextResponse } from "next/server";

const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  return NextResponse.json({ time: new Date().toISOString() });
}
