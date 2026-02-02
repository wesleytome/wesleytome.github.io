import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { isValidLanguage } from "@/lib/i18n";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const secret = request.headers.get("x-sanity-secret");

  if (!secret || secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = (await request.json()) as {
    slug?: string;
    language?: string;
  };

  if (!body?.language || !isValidLanguage(body.language)) {
    return NextResponse.json({ message: "Missing language" }, { status: 400 });
  }

  revalidatePath(`/${body.language}/blog`);

  if (body.slug) {
    revalidatePath(`/${body.language}/blog/${body.slug}`);
  }

  return NextResponse.json({ revalidated: true });
}
