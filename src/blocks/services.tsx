import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import Image from "next/image";
import Link from "next/link";

interface ServicesProps {
  services: {
    title: string;
    description: string;
    icon: string;
    image: {
      src: string;
      alt: string;
    };
  }[];
}

const Services = ({ services }: ServicesProps) => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Card key={index} className="w-full">
              <CardHeader>
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  width={720}
                  height={194}
                />
              </CardHeader>
              <CardContent>
                <Heading level="h3">{service.title}</Heading>
              </CardContent>
              <CardFooter className="text-start">
                <Button asChild variant="link">
                  <Link href="">Learn more</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export { Services };
