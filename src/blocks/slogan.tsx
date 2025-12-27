import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import Link from "next/link";

interface SloganProps {
  title: string;
  slogan: string;
}

const Slogan = ({ title, slogan }: SloganProps) => {
  return (
    <Section>
      <Container className="flex flex-col items-center gap-4">
        <Heading level="h1" className="text-center">
          {title}
        </Heading>
        <p className="text-center">{slogan}</p>
        <Button asChild variant="link">
          <Link href="/schedule">
            New to Mission? Try one of our introductory offers
          </Link>
        </Button>
      </Container>
    </Section>
  );
};

export { Slogan };
