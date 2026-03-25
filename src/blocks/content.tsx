import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { PortableText } from "@/components/ui/portable-text";
import { cleanString } from "@/lib/helpers";
import { cva } from "class-variance-authority";
import { PortableTextBlock } from "next-sanity";

interface ContentProps {
  content: PortableTextBlock[];
  alignment: "left" | "center" | "right" | "justify";
}

const alignmentVariants = cva("text-body group-[.bg-dark]:text-white", {
  variants: {
    alignment: {
      left: "!text-left",
      center: "!text-center",
      right: "!text-right",
      justify: "!text-justify",
    },
  },
});

const Content = ({ content, alignment }: ContentProps) => {
  const classes = alignmentVariants({ alignment: cleanString(alignment) });
  return (
    <div className={classes}>
      <PortableText value={content} />
    </div>
  );
  //   return alignment;
};

export { Content };
