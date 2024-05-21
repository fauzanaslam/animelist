import prisma from "@/libs/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { anime_mal_id, user_email, anime_image, anime_title } =
    await request.json();
  const data = { anime_mal_id, user_email, anime_image, anime_title };

  const createCollection = await prisma.collection.create({ data });
  if (!createCollection)
    return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
