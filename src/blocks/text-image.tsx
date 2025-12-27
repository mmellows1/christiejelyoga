import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import clsx from "clsx";
import Image from "next/image";

interface TextImageProps {
  orientation: "left" | "right";
  image: {
    src: string;
    alt: string;
  };
}

const TextImage = ({ orientation, image, content }: TextImageProps) => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-12 md:gap-24">
          <div
            className={clsx(
              "col-span-12 md:col-span-6",
              orientation === "left" ? "order-2" : "order-1"
            )}
          >
            <Image
              {...image}
              width={400}
              height={240}
              className="aspect-video object-cover"
            />
          </div>
          <div
            className={clsx(
              "col-span-12 md:col-span-6",
              orientation === "left" ? "order-1" : "order-2"
            )}
          >
            <h2 className="font-bold text-3xl mb-4">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-gray-600 mb-4">
              Sint ea qui nostrud eiusmod laboris duis proident cupidatat
              pariatur commodo incididunt fugiat. Cillum minim occaecat ipsum ex
              tempor irure consectetur.
            </p>
            <p className="text-gray-600 mb-4">
              Lorem aliqua eiusmod culpa ea sunt ex qui dolor qui laborum
              aliquip sunt ea. Eiusmod do deserunt magna cillum sint laboris
              culpa aliquip ex. Incididunt eiusmod Lorem nulla esse enim dolore
              voluptate laborum aute.
            </p>
            <ul className="flex flex-col gap-2 list-disc pl-4 text-gray-600">
              <li>
                Do cupidatat pariatur eiusmod consequat est do consequat in id.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { TextImage };
