import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

import { isValidLanguage } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const lang = searchParams.get("lang") ?? "pt";

  if (!secret || secret !== process.env.SANITY_PREVIEW_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  if (!slug || !isValidLanguage(lang)) {
    return NextResponse.json({ message: "Missing slug or language" }, { status: 400 });
  }

  const draft = draftMode();
  draft.enable();

  const redirectUrl = new URL(`/${lang}/blog/${slug}`, siteConfig.url);

  const response = NextResponse.redirect(redirectUrl, 307);
  response.headers.set("Cache-Control", "no-store, private");
  return response;
}
