import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

interface CallToActionBannerProps {
  heading: string;
  description: string;
  cta?: {
    label?: string;
    href?: string;
    newTab?: boolean;
  };
}
const CallToActionBanner = ({
  heading,
  description,
  cta,
  ...rest
}: CallToActionBannerProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Heading level="h2" className="text-center">
        {heading}
      </Heading>
      <Typography className="text-center mb-6">{description}</Typography>
      {cta && cta.href && (
        <Button asChild>
          <Link target={cta?.newTab ? "_blank" : "_self"} href={cta?.href}>
            {cta?.label}
          </Link>
        </Button>
      )}
    </div>
  );
};

export { CallToActionBanner };
