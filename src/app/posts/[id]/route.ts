import { NextResponse, NextRequest } from "next/server";
import { Data } from "../data";
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const postRes = Data.find((p) => p.id === parseInt(params.id));
  console.log(postRes);
  return NextResponse.json(postRes);
}
