import { createImageUrlBuilder, ImageUrlBuilder } from "@sanity/image-url";
import { createClient } from "@sanity/client";
import { client } from "./client";

interface SanityImageRef {
  _type: string;
  _ref: string;
  asset?: {
    _ref: string;
    _type: string;
  };
}

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageRef) {
  return builder.image(source);
}
