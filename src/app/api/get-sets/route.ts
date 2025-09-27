import { NextResponse } from "next/server";

type Set = {
  code: string;
  name: string;
  iconUrl: string;
  imageUrl: string;
  releaseDate: string;
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") ?? "0";
  const size = searchParams.get("size") ?? "20";

  const res = await fetch(
    `https://mtgswap.ru/api/rest/front/main/sets?page=${page}&size=${size}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return NextResponse.json({ error: `Ошибка: ${res.status}` }, { status: res.status });
  }

  const data: Set[] = await res.json();
  return NextResponse.json(data);
}
