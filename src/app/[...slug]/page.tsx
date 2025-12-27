import { Contact } from "@/blocks/contact";
import { Hero } from "@/blocks/hero";
import { Services } from "@/blocks/services";
import { Slogan } from "@/blocks/slogan";
import { TextImage } from "@/blocks/text-image";

export default function Home() {
  return (
    <main className="justify-center bg-slate-50 font-sans dark:bg-black">
      <TextImage
        image={{ alt: "yoga", src: "/yoga-2.jpg" }}
        orientation="left"
      />
      <Contact
        title="Contact"
        description="Consectetur cupidatat tempor ipsum cillum id et nisi."
        image={{ src: "/yoga-3.jpg", alt: "yoga" }}
      />
    </main>
  );
}
