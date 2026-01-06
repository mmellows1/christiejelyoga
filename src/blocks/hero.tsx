import Image from "next/image";

interface HeroProps {
  image: {
    src: string;
    alt: string;
  };
}

const Hero = ({ image }: HeroProps) => {
  if (!image || !image.src) return;
  return (
    <div className="text-white min-h-[100vh] md:min-h-[60vh] bg-slate-100 flex items-center justify-center relative">
      <Image {...image} fill className="z-10 object-cover object-center" />
    </div>
  );
};

export { Hero };
