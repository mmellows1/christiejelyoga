import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  image: {
    src: string;
    alt: string;
  };
}

const Hero = ({ image }: HeroProps) => {
  return (
    <div className="text-white min-h-[50vh] md:min-h-screen bg-slate-100 flex items-center justify-center relative">
      <Image {...image} fill className="z-10 object-cover object-center" />
    </div>
  );
};

export { Hero };
