import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PortableText } from "@/components/ui/portable-text";
import { urlFor } from "@/sanity/image";
import clsx from "clsx";
import { type PortableTextBlock } from "next-sanity";
import Image from "next/image";

interface TextImageProps {
  imageFirst: boolean;
  content: PortableTextBlock[];
  image: any;
}

const TextImage = ({ imageFirst, image, content }: TextImageProps) => {
  return (
    <div className="grid grid-cols-12 md:gap-24 gap-4">
      <div
        className={clsx(
          "col-span-12 md:col-span-6",
          imageFirst ? "order-1" : "order-2"
        )}
      >
        {image && image.asset && (
          <Image
            src={urlFor(image?.asset).url()}
            alt={image.asset.alt || "image"}
            width={550}
            height={240}
            className="aspect-video w-full object-cover"
          />
        )}
      </div>
      <div
        className={clsx(
          "col-span-12 md:col-span-6",
          imageFirst ? "order-2" : "order-1"
        )}
      >
        <PortableText value={content} />
      </div>
    </div>
  );
};

export { TextImage };
