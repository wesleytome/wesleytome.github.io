import { NextResponse } from "next/server";
import { isValidLanguage } from "@/lib/i18n";
import { fetchPublishedPosts } from "@/lib/sanity.fetch";
import { siteConfig } from "@/lib/site";

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ lang: string }> },
) {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    return new NextResponse("Invalid language", { status: 404 });
  }

  const posts = await fetchPublishedPosts(lang);

  const items = posts
    .map((post) => {
      const url = `${siteConfig.url}/${lang}/blog/${post.slug.current}`;
      return `
      <item>
        <title>${escapeXml(post.title)}</title>
        <link>${url}</link>
        <guid>${url}</guid>
        <description>${escapeXml(post.excerpt ?? siteConfig.description)}</description>
${post.publishedAt ? `        <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>` : ""}
      </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${escapeXml(siteConfig.title)}</title>
      <link>${siteConfig.url}/${lang}/blog</link>
      <description>${escapeXml(siteConfig.description)}</description>
${items}
    </channel>
  </rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}