import imageUrlBuilder from "@sanity/image-url";

import { sanityClient } from "./sanity.client";

const builder = imageUrlBuilder(sanityClient);

// O builder.image aceita: string (asset ID), objeto SanityImage, ou objeto com asset
// Usamos um tipo flexível que cobre todos os casos que o Sanity usa
export const urlForImage = (source: 
  | string 
  | { asset?: { _ref?: string; _type?: string } | string }
  | { _ref?: string; _type?: string }
  | null 
  | undefined
) => {
  if (!source) {
    throw new Error("Image source is required");
  }
  // O builder.image aceita vários formatos, então fazemos um cast seguro
  return builder.image(source as Parameters<typeof builder.image>[0]);
};
