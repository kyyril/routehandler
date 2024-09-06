import { Data } from "./data";
export async function GET() {
  return Response.json(Data);
}

export async function POST(request: Request) {
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
