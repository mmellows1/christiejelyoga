import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Bubbles, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";

interface SocialMediaBannerProps {
  heading: string;
  links: {
    href: string;
    type: string;
  }[];
}

const SocialMediaBanner = ({ heading, links }: SocialMediaBannerProps) => {
  return (
    <Section>
      <Container>
        <Heading className="text-center mb-4" level="h2">
          {heading}
        </Heading>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="size-18 rounded-full bg-purple-400 text-white flex items-center justify-center"
          >
            <Instagram size={36} />
          </Link>
          <Link
            href="/"
            className="size-18 rounded-full bg-green-400 text-white flex items-center justify-center"
          >
            <MessageCircle size={36} />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export { SocialMediaBanner };
