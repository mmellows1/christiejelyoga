import { cva } from "class-variance-authority";
import clsx from "clsx";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  background?: string;
  padding?: {
    top: string;
    bottom: string;
  };
}

const sectionVariants = cva("group group-section", {
  variants: {
    background: {
      default: "bg-white",
      none: "bg-transparent",
      white: "bg-white",
      brand: "bg-brand",
      caramel: "bg-accent bg-dark",
      "soft-gray": "bg-secondary",
    },
    paddingTop: {
      default: "pt-8 px-8 md:px-0 md:pt-12",
      none: "pt-0 px-0 md:px-0 md:pt-0",
      sm: "pt-8 px-8 md:px-0 md:pt-16",
      md: "pt-8 px-8 md:px-0 md:pt-32",
      lg: "pt-8 px-8 md:px-0 md:pt-48",
    },
    paddingBottom: {
      default: "pb-8 px-8 md:px-0 md:pb-12",
      none: "pb-0 px-0 md:px-0 md:pb-0",
      sm: "pb-8 px-8 md:px-0 md:pb-16",
      md: "pb-8 px-8 md:px-0 md:pb-32",
      lg: "pb-8 px-8 md:px-0 md:pb-48",
    },
  },
  defaultVariants: {
    background: "default",
    paddingTop: "default",
    paddingBottom: "default",
  },
});

const Section = ({
  children,
  background = "default",
  padding = { bottom: "md", top: "md" },
  className,
  ...props
}: SectionProps) => {
  return (
    <section
      {...props}
      className={clsx(
        sectionVariants({
          background,
          paddingTop: padding.top,
          paddingBottom: padding.bottom,
        } as any),
        className
      )}
    >
      {children}
    </section>
  );
};

export { Section };
