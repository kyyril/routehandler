import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const listHeader = headers();
  console.log(listHeader.get("Authorization"));
  console.log(request.cookies.get("token"));
  console.log(cookies().get("theme"));
  console.log(cookies().set("theme", "dark"));
  return new Response("<h1>Halo Dunia</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
