import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const listHeader = headers();
  console.log(listHeader.get("Authorization"));
  return new Response("<h1>Halo Dunia</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
