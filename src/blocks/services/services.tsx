import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Typography } from "@/components/ui/typography";
import { urlFor } from "@/sanity/image";
import { fetchReference } from "@/sanity/references";
import Image from "next/image";
import Link from "next/link";
import { ServiceCarousel } from "./services-carousel";
import { Container } from "@/components/layout/container";

export interface ServiceItem {
  _ref: any;
  title: string;
  excerpt: string;
  description: string;
  icon: string;
  image: any;
}

interface ServicesProps {
  heading?: string;
  services: ServiceItem[];
  padding?: {
    top: string;
    bottom: string;
  };
}

const Services = async ({ heading, services, padding }: ServicesProps) => {
  const resolvedServices = await Promise.all(
    services && services.length > 0
      ? services
          .filter((ref) => ref._ref)
          .map((ref) => fetchReference(ref._ref))
      : []
  );

  return (
    <>
      {heading && (
        <Heading level="h2" className="mb-4 text-center">
          {heading}
        </Heading>
      )}
      <ServiceCarousel services={resolvedServices} />
    </>
  );
};

export { Services };
