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

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { name } = await request.json();
  const index = Data.findIndex((item) => item.id === parseInt(params.id));
  Data[index].name = name;
  return NextResponse.json(Data[index]);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const index = Data.findIndex((item) => item.id === parseInt(params.id));
  Data[index] = { id: parseInt(params.id), ...body };
  return NextResponse.json(Data[index]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const index = Data.findIndex((item) => item.id === parseInt(params.id));
  Data.splice(index, 1);
  return NextResponse.json({ message: "Post deleted" });
}
