import { Data } from "./data";
export async function GET() {
  return Response.json(Data);
}
