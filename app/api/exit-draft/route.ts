import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

export async function GET() {
  const draft = draftMode();
  draft.disable();

  const response = NextResponse.redirect(siteConfig.url, 307);
  response.headers.set("Cache-Control", "no-store, private");
  return response;
}
