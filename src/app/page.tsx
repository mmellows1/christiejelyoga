import { Hero } from "@/blocks/hero";
import { Services } from "@/blocks/services";
import { Slogan } from "@/blocks/slogan";
import { TextImage } from "@/blocks/text-image";

export default function Home() {
  return (
    <main className="justify-center bg-slate-50 font-sans dark:bg-black">
      <Slogan
        title="Nisi eu veniam officia anim minim ipsum esse dolor"
        slogan="Minim cillum laborum exercitation aliqua. Amet reprehenderit irure ea veniam aliqua ex voluptate elit aliqua magna ullamco. Nisi consequat sunt officia aute mollit pariatur Lorem id qui ipsum cillum est. Voluptate dolor elit commodo reprehenderit veniam laboris reprehenderit consequat labore occaecat duis. Nostrud aliquip culpa pariatur dolor amet sunt sunt ea nulla aute incididunt."
      />
      <Services
        services={[
          {
            title: "Commodo quis eiusmod non ea laborum tempor",
            description:
              "Ad velit dolor consequat qui ullamco eu ut dolore fugiat sint. Amet elit magna consectetur amet in nulla. Id duis enim aliquip consectetur Lorem et culpa. Qui deserunt enim anim tempor esse nulla nisi elit fugiat eiusmod.",
            icon: "Christie Jel Yoga",
            image: {
              src: "/yoga-2.jpg",
              alt: "Christie Jel Yoga",
            },
          },
          {
            title: "Commodo quis eiusmod non ea laborum tempor",
            description:
              "Ad velit dolor consequat qui ullamco eu ut dolore fugiat sint. Amet elit magna consectetur amet in nulla. Id duis enim aliquip consectetur Lorem et culpa. Qui deserunt enim anim tempor esse nulla nisi elit fugiat eiusmod.",
            icon: "Christie Jel Yoga",
            image: {
              src: "/yoga-3.jpg",
              alt: "Christie Jel Yoga",
            },
          },
          {
            title: "Commodo quis eiusmod non ea laborum tempor",
            description:
              "Ad velit dolor consequat qui ullamco eu ut dolore fugiat sint. Amet elit magna consectetur amet in nulla. Id duis enim aliquip consectetur Lorem et culpa. Qui deserunt enim anim tempor esse nulla nisi elit fugiat eiusmod.",
            icon: "Christie Jel Yoga",
            image: {
              src: "/yoga-1.jpg",
              alt: "Christie Jel Yoga",
            },
          },
        ]}
      />
      <TextImage
        image={{ alt: "yoga", src: "/yoga-2.jpg" }}
        orientation="left"
      />
    </main>
  );
}
