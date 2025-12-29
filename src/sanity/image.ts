import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
import { client } from "./client";

interface SanityImageRef {
  _type: "reference";
  _ref: string;
}

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageRef) {
  return builder.image(source);
}
