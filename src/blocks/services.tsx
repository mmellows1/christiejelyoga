import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { urlFor } from "@/sanity/image";
import { fetchReference } from "@/sanity/references";
import Image from "next/image";
import Link from "next/link";

interface ServicesProps {
  heading?: string;
  services: {
    _ref: any;
    title: string;
    excerpt: string;
    description: string;
    icon: string;
    image: any;
  }[];
}

const Services = async ({ heading, services }: ServicesProps) => {
  const resolvedServices = await Promise.all(
    services.map((ref) => fetchReference(ref._ref))
  );

  return (
    <Section className="bg-white">
      <Container>
        {heading && (
          <Heading level="h2" className="mb-4 text-center">
            {heading}
          </Heading>
        )}
        <div className="grid grid-cols-3 gap-4">
          {resolvedServices.map((service, index) => {
            const imageUrl = urlFor(service?.image).url();

            return (
              <Card key={index} className="w-full">
                <CardHeader>
                  <Image
                    src={imageUrl}
                    alt={service?.image.alt || heading}
                    width={720}
                    height={194}
                  />
                </CardHeader>
                <CardContent>
                  <Heading level="h3" className="mb-4">
                    {service?.title}
                  </Heading>
                  <p>{service?.excerpt}</p>
                </CardContent>
                <CardFooter className="text-start mt-auto">
                  <Button asChild>
                    <Link href="">Learn more</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export { Services };
