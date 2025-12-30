import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { SquareArrowOutUpRight } from "lucide-react";
import { PortableText, PortableTextBlock } from "next-sanity";
import Link from "next/link";
import { vi } from "zod/v4/locales";

interface TwoColumnContentProps {
  leftContent: PortableTextBlock[];
  layout: string;
  rightContent: PortableTextBlock[];
  cta?: {
    label?: string;
    href?: string;
    newTab?: boolean;
  };
}

const getLayout = (layout: string) => {
  switch (layout) {
    case "4-8":
      return ["col-span-4", "col-span-8"];
    case "6-6":
      return ["col-span-6", "col-span-6"];
    case "5-2-5":
      return ["col-span-5", "col-start-8 col-span-5"];
    default:
      return ["col-span-4", "col-span-8"];
  }
};

const TwoColumnContent = ({
  leftContent,
  rightContent,
  layout,
  cta,
}: TwoColumnContentProps) => {
  const [leftSpan, rightSpan] = getLayout(layout);
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-12 gap-12">
          <div className={leftSpan}>
            <PortableText value={leftContent} />
          </div>
          <div className={rightSpan}>
            <PortableText value={rightContent} />
          </div>
          {cta && cta.href && cta.href !== "" && (
            <div className="col-span-10 col-start-2 flex justify-center">
              <Button asChild className="w-full">
                <Link
                  target={cta?.newTab ? "_blank" : "_self"}
                  href={cta?.href}
                >
                  {cta?.label}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export { TwoColumnContent };
