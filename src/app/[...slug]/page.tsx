import { Contact } from "@/blocks/contact";
import { Hero } from "@/blocks/hero";
import { Services } from "@/blocks/services";
import { Slogan } from "@/blocks/slogan";
import { TextImage } from "@/blocks/text-image";
import { TwoColumnContent } from "@/blocks/two-column-content";
import { sanityFetch } from "@/sanity/live";
import { defineQuery, SanityDocument } from "next-sanity";
import { redirect } from "next/navigation";

const query = defineQuery(
  `*[_type == "pages" && slug.current == $slug][0] {
    "imageUrl": image.asset->url,
    title,
    slug,
    content
  }`
);

const blockMapper: Record<string, any> = {
  sloganBlock: Slogan,
  textMediaBlock: TextImage,
  servicesBlock: Services,
  contactFormBlock: Contact,
  twoColumnContentBlock: TwoColumnContent,
};

const BlockRenderer = (content: any) => {
  if (!content?.content) return;

  return content.content.map((c: SanityDocument) => {
    const Component = blockMapper[c._type] || null;

    if (Component) {
      return <Component {...c} key={c._key} />;
    }
  });
};

export default async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  const { data } = await sanityFetch({
    query,
    params: {
      slug: slug[0],
    },
  });

  if (!data) {
    return;
  }

  return (
    <main className="justify-center bg-slate-50 font-sans dark:bg-black">
      <Hero image={{ src: data.imageUrl, alt: data.title }} />
      <BlockRenderer content={data.content} />
    </main>
  );
};
