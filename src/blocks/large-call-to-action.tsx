import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface LargeCallToActionProps {
  cta?: {
    label?: string;
    href: string;
    newTab?: boolean;
  };
}

const LargeCallToAction = ({ cta }: LargeCallToActionProps) => {
  return (
    <Section>
      <Container>
        <div className="flex justify-center">
          {cta && cta.href && cta.href !== "" && (
            <Button asChild className="px-12 py-8 text-xl">
              <Link href={cta.href} target={cta?.newTab ? "_blank" : "_self"}>
                {cta.label}
              </Link>
            </Button>
          )}
        </div>
      </Container>
    </Section>
  );
};

export { LargeCallToAction };
