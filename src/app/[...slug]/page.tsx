import { Hero } from "@/blocks/hero";
import { getPage } from "@/lib/api";
import { BlockRenderer } from "@/lib/block-registry";
import { defineQuery } from "next-sanity";

const query = defineQuery(
  `*[_type == "pages" && slug.current == $slug][0] {
    "imageUrl": image.asset->url,
    title,
    slug,
    content
  }`
);

export default async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  const data = await getPage(slug[0]);

  if (!data) {
    return;
  }

  return (
    <main className="justify-center bg-slate-50  dark:bg-black">
      <Hero image={{ src: data.imageUrl, alt: data.title }} />
      <BlockRenderer content={data.content} />
    </main>
  );
};
