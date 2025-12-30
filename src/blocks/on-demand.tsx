import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { YoutubeDialog } from "@/components/ui/youtube-dialog";
import { PlayCircle, PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface OnDemandProps {
  heading: string;
  videoId?: string;
  cta?: {
    label?: string;
    href?: string;
    newTab?: boolean;
  };
}
const OnDemand = ({ heading, videoId, cta }: OnDemandProps) => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-6">
            <div className="relative">
              <YoutubeDialog videoId={videoId || ""} />
            </div>
          </div>
          <div className="col-span-5 col-start-8">
            <Heading className="mb-4">{heading}</Heading>
            {cta && cta.href && cta.href !== "" && (
              <Button asChild>
                <Link
                  target={cta?.newTab ? "_blank" : "_self"}
                  href={cta?.href}
                >
                  {cta?.label}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { OnDemand };
