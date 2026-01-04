import { Hero } from "@/blocks/hero";
import { getPage, getPageById, getSiteConfig } from "@/lib/api";
import { BlockRenderer } from "@/lib/block-registry";
import { AOSProvider } from "@/providers/aos";

export default async function Home() {
  const config = await getSiteConfig();
  const page = await getPageById(config.frontpage._ref);

  return (
    <main className="justify-center bg-slate-50 font-sans dark:bg-black">
      <Hero
        image={{
          src: "/yoga-1.jpg",
          alt: "Christie Jel Yoga",
        }}
      />
      <AOSProvider>
        <BlockRenderer content={page.content} />
      </AOSProvider>
    </main>
  );
}
