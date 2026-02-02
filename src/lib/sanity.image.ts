import imageUrlBuilder from "@sanity/image-url";

import { sanityClient } from "./sanity.client";

const builder = imageUrlBuilder(sanityClient);

export const urlForImage = (source: unknown) => {
  return builder.image(source);
};
