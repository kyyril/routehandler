import { NextResponse, NextRequest } from "next/server";
import { Data } from "./data";

export async function GET(request: NextRequest) {
  console.log(request.nextUrl.searchParams.get("userId"));
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");
  if (userId) {
    const dataFilter = Data.filter((item) => item.userId == parseInt(userId));
    console.log(dataFilter);
    return NextResponse.json(dataFilter);
  }
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
