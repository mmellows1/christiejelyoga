import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";

interface VideoProps {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  videos: {
    src: string;
    alt: string;
  };
}

const Videos = ({ title, image, videos }: VideoProps) => {
  return (
    <Section>
      <Container>
        <Heading level="h2" className="text-center">
          {title}
        </Heading>
      </Container>
    </Section>
  );
};

export { Videos };
