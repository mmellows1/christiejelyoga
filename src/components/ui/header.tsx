import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/container";
import { Button } from "./button";
import { Heading } from "./heading";

interface HeaderProps {
  links: { label: string; href: string }[];
}

const Header = ({ links }: HeaderProps) => {
  return (
    <header className="p-8 py-4 bg-slate-100/80 fixed top-0 left-0 z-90 w-full grid grid-cols-12 items-center">
      <div className="gap-4 col-span-2 flex justify-start">
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link className="font-bold" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center col-span-8">
        <Heading level="h1">
          <Link href="/">Christie Jel Yoga</Link>
        </Heading>
      </div>
      <div className="gap-4 col-span-2 flex justify-end">
        <Button asChild variant="outline">
          <Link href="/contact#contact">Contact me</Link>
        </Button>
      </div>
    </header>
  );
};

export { Header };
