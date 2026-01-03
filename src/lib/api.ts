import { client } from "@/sanity/client";
import { sanityFetch } from "@/sanity/live";
import { groq } from "next-sanity";

const PAGE_QUERY = groq`
    *[_type == "pages" && slug.current == $slug][0] {
      "imageUrl": image.asset->url,
      title,
      slug,
      content
    }`;

const PAGE_QUERY_ID = groq`
  *[_type == "pages" && _id == $id][0] {
    "imageUrl": image.asset->url,
    title,
    slug,
    content
  }`;

const CONFIG_QUERY = groq`
  *[_type == "config"][0]{
    title,
    logo,
    momoYogaScheduleUrl,
    frontpage,
    menu[]->{_id, title, slug},
    ctas[]{_id, label, href, newTab}
  }`;

export const getPage = async (slug: string) => {
  const { data } = await sanityFetch({
    query: PAGE_QUERY,
    params: {
      slug,
    },
  });
  return data;
};

export const getPageById = async (id: string) => {
  const { data } = await sanityFetch({
    query: PAGE_QUERY_ID,
    params: {
      id,
    },
  });
  return data;
};

export const getSiteConfig = async () => {
  try {
    const res = await client.fetch(CONFIG_QUERY);
    return res;
  } catch (error) {
    console.error(error);
  }
};
