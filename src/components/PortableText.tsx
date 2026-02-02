import Image from "next/image";
import { PortableText as PortableTextRenderer } from "@portabletext/react";

import { urlForImage } from "@/lib/sanity.image";

type PortableTextProps = {
  value: unknown[];
};

export const PortableText = ({ value }: PortableTextProps) => {
  return (
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
                className="text-primary underline decoration-primary/60 underline-offset-4"
              >
                {children}
              </a>
            );
          },
        },
        block: {
          h2: ({ children }) => (
            <h2 className="mt-10 text-2xl font-semibold">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-8 text-xl font-semibold">{children}</h3>
          ),
          normal: ({ children }) => <p className="leading-7">{children}</p>,
        },
      }}
    />
  );
};
