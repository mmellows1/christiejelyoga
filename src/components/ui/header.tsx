import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/container";
import { Button } from "./button";
import { Heading } from "./heading";
import { SanityDocument } from "next-sanity";

interface HeaderProps {
  title: string;
  menu: SanityDocument[];
  logo: string | null;
}

const Header = ({ title, menu, logo }: HeaderProps) => {
  console.log(menu);
  return (
    <header className="p-8 py-4 bg-slate-100/80 fixed top-0 left-0 z-90 w-full grid grid-cols-12 items-center">
      <div className="gap-4 col-span-4 flex justify-start">
        <ul className="flex gap-4">
          {menu.map((item, index) => (
            <li key={index}>
              <Link className="font-bold" href={item.slug}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center col-span-4">
        <Heading level="h1">
          <Link href="/">
            {logo ? (
              <Image src={logo} alt={title} width={120} height={40} />
            ) : (
              title
            )}
          </Link>
        </Heading>
      </div>
      <div className="gap-4 col-span-4 flex justify-end">
        <Button asChild variant="outline">
          <Link href="/contact#contact">Contact me</Link>
        </Button>
      </div>
    </header>
  );
};

export { Header };
