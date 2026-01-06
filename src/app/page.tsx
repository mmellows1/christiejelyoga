import { Hero } from "@/blocks/hero";
import { getPageById, getSiteConfig } from "@/lib/api";
import { BlockRenderer } from "@/lib/block-registry";

export default async function Home() {
  const config = await getSiteConfig();
  const page = await getPageById(config.frontpage._ref);

  return (
    <main className="justify-center bg-slate-50  dark:bg-black">
      <Hero image={{ src: page.imageUrl, alt: page.title }} />
      <BlockRenderer content={page.content} />
    </main>
  );
}
