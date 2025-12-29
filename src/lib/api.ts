import { client } from "@/sanity/client";

const CONFIG_QUERY = `*[_type == 'config'][0] { 
  title,
  "logo": logo.asset->url,
  menu[]->{
    title,
    "slug": slug.current
  }
}`;

const getSiteConfig = async () => {
  try {
    const res = await client.fetch(CONFIG_QUERY);
    return res;
  } catch (error) {
    console.error(error);
  }
};

// const getPage = async () => {
//   try {
//     client.fetch();
//   } catch (error) {
//     console.error(error);
//   }
// };

// const getServices = async () => {
//   try {
//     client.fetch();
//   } catch (error) {
//     console.error(error);
//   }
// };

export { getSiteConfig };
