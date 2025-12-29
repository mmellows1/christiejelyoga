import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import Link from "next/link";

interface SloganProps {
  heading: string;
  slogan: string;
  cta?: {
    label?: string;
    href?: string;
    newTab?: boolean;
  };
}
const Slogan = ({ heading, slogan, cta, ...rest }: SloganProps) => {
  return (
    <Section {...rest}>
      <Container className="flex flex-col items-center gap-4">
        <Heading level="h1" className="text-center">
          {heading}
        </Heading>
        <p className="text-center">{slogan}</p>
        {cta && cta.href && (
          <Button asChild variant="link">
            <Link target={cta?.newTab ? "_blank" : "_self"} href={cta?.href}>
              {cta?.label}
            </Link>
          </Button>
        )}
      </Container>
    </Section>
  );
};

export { Slogan };
