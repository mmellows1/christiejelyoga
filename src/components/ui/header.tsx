import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { Heading } from "./heading";
import { SidebarTrigger } from "./sidebar";
import { CTAType } from "@/types/ctas";

interface HeaderProps {
  title: string;
  menu: SanityDocument[];
  logo: string | null;
  ctas?: CTAType[];
}

const Header = ({ title, menu, logo, ctas }: HeaderProps) => {
  return (
    <header className="p-8 py-4 bg-slate-100/80 sticky top-0 left-0 z-50 w-full flex gap-4 md:gap-0 md:grid md:grid-cols-12 items-center">
      <div className="gap-4 col-span-4 flex justify-start">
        <SidebarTrigger className="md:hidden" />
        <ul className="flex gap-4 md:flex hidden">
          {menu.map((item, index) => (
            <li key={item._id}>
              <Link className="font-bold" href={item.slug.current}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-start md:justify-center md:col-span-4">
        <Heading level="h1" as="h4">
          <Link href="/">
            {logo ? (
              <Image src={logo} alt={title} width={120} height={40} />
            ) : (
              title
            )}
          </Link>
        </Heading>
      </div>
      <div className="gap-4 col-span-4 hidden md:flex justify-end">
        {ctas &&
          ctas.length > 0 &&
          ctas.map((cta: CTAType, index: number) => (
            <Button
              key={cta?.href ? cta?.href + index : index}
              asChild
              variant="outline"
            >
              <Link href={cta?.href || "/"}>{cta?.label}</Link>
            </Button>
          ))}
      </div>
    </header>
  );
};

export { Header };
