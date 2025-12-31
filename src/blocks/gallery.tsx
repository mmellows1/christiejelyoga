import { Section } from "@/components/layout/section";
import { urlFor } from "@/sanity/image";
import Image from "next/image";

interface GalleryProps {
  images: {
    _ref: string;
    _type: string;
  }[];
}

const Gallery = ({ images }: GalleryProps) => {
  const imageUrls = images.map((image) => urlFor(image).url());
  return (
    <Section className="md:py-0 !py-0 !px-0 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {imageUrls.map((image) => (
          <Image
            loading="lazy"
            key={image}
            src={image}
            alt="image"
            width={720}
            height={720}
            className="aspect-video object-cover"
          />
        ))}
      </div>
    </Section>
  );
};

export { Gallery };
