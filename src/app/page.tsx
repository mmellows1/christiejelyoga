import { CallToActionBanner } from "@/blocks/call-to-action-banner";
import { Hero } from "@/blocks/hero";

export default function Home() {
  return (
    <main className="justify-center bg-slate-50 font-sans dark:bg-black">
      <Hero
        image={{
          src: "/yoga-1.jpg",
          alt: "Christie Jel Yoga",
        }}
      />
      {/* <Services
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
      /> */}
    </main>
  );
}
