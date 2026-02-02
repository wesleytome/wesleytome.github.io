import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import { siteConfig } from "@/lib/site";

const defaultLang = siteConfig.i18n.en;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultLang.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultLang.description,
  keywords: defaultLang.keywords,
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  openGraph: {
    title: defaultLang.ogTitle,
    description: defaultLang.ogDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: defaultLang.locale,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/wesley-tome.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultLang.ogTitle,
    description: defaultLang.ogDescription,
    creator: siteConfig.twitterHandle,
    images: [`${siteConfig.url}/wesley-tome.jpg`],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "São Paulo",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="darkreader-lock" />
        
        {/* Schema.org JSON-LD */}
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.author.name,
              jobTitle: defaultLang.jobTitle,
              description: defaultLang.description,
              url: siteConfig.url,
              image: `${siteConfig.url}/wesley-tome.jpg`,
              sameAs: siteConfig.author.sameAs,
              address: {
                "@type": "PostalAddress",
                addressLocality: "São Paulo",
                addressCountry: "BR",
              },
            }),
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3Z2CQPD3HE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3Z2CQPD3HE');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
