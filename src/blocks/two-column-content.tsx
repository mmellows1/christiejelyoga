import { Button } from "@/components/ui/button";
import { PortableText } from "@/components/ui/portable-text";
import { PortableTextBlock } from "next-sanity";
import Link from "next/link";

interface TwoColumnContentProps {
  leftContent: PortableTextBlock[];
  layout: string;
  rightContent: PortableTextBlock[];
  cta?: {
    label?: string;
    href?: string;
    newTab?: boolean;
  };
}

const getLayout = (layout: string) => {
  switch (layout) {
    case "4-8":
      return ["md:col-span-4", "md:col-span-8"];
    case "6-6":
      return ["md:col-span-6", "md:col-span-6"];
    case "5-2-5":
      return ["md:col-span-5", "md:col-start-8 md:col-span-5"];
    default:
      return ["md:col-span-4", "md:col-span-8"];
  }
};

const TwoColumnContent = ({
  leftContent,
  rightContent,
  layout,
  cta,
}: TwoColumnContentProps) => {
  const [leftSpan, rightSpan] = getLayout(layout);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-24 gap-4">
        <div className={leftSpan}>
          <PortableText value={leftContent} />
        </div>
        <div className={rightSpan}>
          <PortableText value={rightContent} />
        </div>
        {cta && cta.href && cta.href !== "" && (
          <div className="md:col-span-10 md:col-start-2 flex justify-center">
            <Button asChild className="w-full">
              <Link target={cta?.newTab ? "_blank" : "_self"} href={cta?.href}>
                {cta?.label}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export { TwoColumnContent };
