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
    <>
      <Heading className="text-center mb-4" level="h2">
        {heading}
      </Heading>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="https://www.instagram.com/christiejelyoga/"
          className="size-18 rounded-full bg-purple-400 text-white flex items-center justify-center"
        >
          <Instagram size={36} />
          <span className="sr-only">Instagram</span>
        </Link>
      </div>
    </>
  );
};

export { SocialMediaBanner };
