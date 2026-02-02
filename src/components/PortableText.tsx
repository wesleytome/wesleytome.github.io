import Image from "next/image";
import { PortableText as PortableTextRenderer } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";

import { urlForImage } from "@/lib/sanity.image";

type PortableTextProps = {
  value: TypedObject | TypedObject[];
};

export const PortableText = ({ value }: PortableTextProps) => {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PortableTextRenderer
        value={value}
        components={{
          types: {
            image: ({ value }) => {
              if (!value?.asset) {
                return null;
              }
              const url = urlForImage(value).width(1200).quality(80).url();
              return (
                <div className="my-8 overflow-hidden rounded-2xl">
                  <Image
                    src={url}
                    alt={value.alt ?? "Imagem do post"}
                    width={1200}
                    height={630}
                    className="h-auto w-full"
                  />
                </div>
              );
            },
            videoEmbed: ({ value }) => {
              if (!value?.url) {
                return null;
              }

              return (
                <div className="my-8 aspect-video overflow-hidden rounded-2xl bg-black/10">
                  <iframe
                    src={value.url}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={value.title ?? "Video"}
                  />
                </div>
              );
            },
            divider: () => {
              return (
                <div className="my-12 flex items-center justify-center">
                  <div className="flex items-center gap-3 text-muted-foreground/40">
                    <span className="text-2xl">•</span>
                    <span className="text-2xl">•</span>
                    <span className="text-2xl">•</span>
                  </div>
                </div>
              );
            },
          },
          marks: {
            link: ({ children, value }) => {
              const href = value?.href ?? "#";
              const isExternal = href.startsWith("http");
              return (
                <a
                  href={href}
                  rel={isExternal ? "noreferrer noopener" : undefined}
                  target={isExternal ? "_blank" : undefined}
                  className="text-primary underline decoration-primary/60 underline-offset-4 hover:decoration-primary transition-colors"
                >
                  {children}
                </a>
              );
            },
            strong: ({ children }) => (
              <strong className="font-semibold">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="italic">{children}</em>
            ),
            code: ({ children }) => (
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">{children}</code>
            ),
          },
          block: {
            h1: ({ children }) => (
              <h1 className="mt-12 mb-6 text-4xl font-bold font-sans">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="mt-10 mb-4 text-3xl font-semibold font-sans">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="mt-8 mb-3 text-2xl font-semibold font-sans">{children}</h3>
            ),
            h4: ({ children }) => (
              <h4 className="mt-6 mb-2 text-xl font-semibold font-sans">{children}</h4>
            ),
            normal: ({ children }) => (
              <p className="mb-6 text-base leading-relaxed font-sans">{children}</p>
            ),
            blockquote: ({ children }) => (
              <blockquote className="my-6 border-l-4 border-primary pl-6 italic text-muted-foreground">
                {children}
              </blockquote>
            ),
          },
          list: {
            bullet: ({ children }) => (
              <ul className="my-6 ml-6 list-disc space-y-2 font-sans">{children}</ul>
            ),
            number: ({ children }) => (
              <ol className="my-6 ml-6 list-decimal space-y-2 font-sans">{children}</ol>
            ),
          },
          listItem: {
            bullet: ({ children }) => (
              <li className="pl-2 leading-relaxed">{children}</li>
            ),
            number: ({ children }) => (
              <li className="pl-2 leading-relaxed">{children}</li>
            ),
          },
        }}
      />
    </div>
  );
};
