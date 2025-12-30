import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { SquareArrowOutUpRight } from "lucide-react";
import { PortableTextBlock } from "next-sanity";
import Link from "next/link";

interface TwoColumnContentProps {
  heading?: string;
  content?: string;
  cta?: {
    label?: string;
    href?: string;
    newTab?: boolean;
  };
}

const TwoColumnContent = ({ heading, content, cta }: TwoColumnContentProps) => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-12 gap-12 items-center">
          <div className="col-span-4">
            <Heading level="h3" as="h1" className="text-pretty">
              {heading}
            </Heading>
          </div>
          <div className="col-span-8">
            <p className="mb-4">{content}</p>
            {cta && cta.href && cta.href !== "" && (
              <Button asChild variant="link">
                <Link
                  target={cta?.newTab ? "_blank" : "_self"}
                  href={cta?.href}
                >
                  {cta?.label}
                  {cta?.newTab && <SquareArrowOutUpRight />}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { TwoColumnContent };
