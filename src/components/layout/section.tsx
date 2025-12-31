import { cva } from "class-variance-authority";
import clsx from "clsx";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  background?: "default" | "dark" | "light";
  padding?: "default" | "none" | "sm" | "md" | "lg";
}

const sectionVariants = cva("", {
  variants: {
    background: {
      default: "bg-white",
      dark: "bg-dark",
      light: "bg-light",
    },
    padding: {
      default: "py-8 px-8 md:px-0 md:py-12",
      none: "py-0 px-0 md:px-0 md:py-0",
      sm: "py-8 px-8 md:px-0 md:py-16",
      md: "py-8 px-8 md:px-0 md:py-32",
      lg: "py-8 px-8 md:px-0 md:py-48",
    },
  },
  defaultVariants: {
    background: "default",
    padding: "default",
  },
});

const Section = ({
  children,
  background = "default",
  padding = "default",
  className,
  ...props
}: SectionProps) => {
  return (
    <section
      className={clsx(sectionVariants({ background, padding }), className)}
      {...props}
    >
      {children}
    </section>
  );
};

export { Section };
