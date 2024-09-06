import { NextResponse, NextRequest } from "next/server";
import { Data } from "./data";
export async function GET() {
  return NextResponse.json(Data);
}

export async function POST(request: NextRequest) {
  const post = await request.json();
  const newPost = {
    id: Data.length + 1,
    ...post,
  };
  Data.push(newPost);
  return new Response(newPost, {
    status: 201,
  });
}
