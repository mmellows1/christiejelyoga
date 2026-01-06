import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heading } from "@/components/ui/heading";
import { Typography } from "@/components/ui/typography";
import { urlFor } from "@/sanity/image";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

const ServiceCarousel = ({
  services,
}: {
  services: (SanityDocument<Record<string, any>> | undefined)[];
}) => {
  return (
    <Carousel opts={{ align: "start" }}>
      <CarouselContent className="-ml-8">
        {services &&
          services.length > 0 &&
          services.map((service: any, index) => {
            const imageUrl = urlFor(service?.image).url();

            return (
              <CarouselItem className="pl-8 md:basis-1/2 lg:basis-1/3 items-stetch">
                <Card key={index} className="md:h-full basis-full">
                  <CardHeader>
                    <Image
                      className="aspect-video md:aspect-9/12 object-cover"
                      src={imageUrl}
                      alt={service?.image.alt || "service image"}
                      width={720}
                      height={194}
                    />
                  </CardHeader>
                  <CardContent>
                    <Heading level="h3" className="mb-4">
                      {service?.title}
                    </Heading>
                    <Typography>{service?.excerpt}</Typography>
                  </CardContent>
                  <CardFooter className="text-start mt-auto">
                    <Button asChild>
                      <Link href="">Learn more</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            );
          })}
      </CarouselContent>
      <CarouselNext className="top-8 md:top-1/2" />
      <CarouselPrevious className="top-8 md:top-1/2" />
    </Carousel>
  );
};

export { ServiceCarousel };
