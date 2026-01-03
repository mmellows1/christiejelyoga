import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const headingVariants = cva(
  "font-bold group text-heading font-thin font-heading",
  {
    variants: {
      level: {
        h1: "text-4xl md:text-5xl",
        h2: "text-3xl md:text-4xl",
        h3: "text-2xl md:text-3xl",
        h4: "text-xl md:text-2xl",
        h5: "text-lg md:text-xl",
        h6: "text-md md:text-lg",
      },
    },
    defaultVariants: {
      level: "h3",
    },
  }
);

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingElement = React.ElementType;

type HeadingProps<T extends HeadingElement = "h3"> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children"> &
  VariantProps<typeof headingVariants>;

const isHeadingTag = (value: unknown): value is HeadingTag =>
  typeof value === "string" &&
  ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);

const Heading = <T extends HeadingElement = "h3">({
  as,
  level = "h3",
  className,
  children,
  ...props
}: HeadingProps<T>) => {
  const Component: React.ElementType = as ?? "h3";
  const resolvedLevel: HeadingTag = isHeadingTag(as) ? as : (level ?? "h3");

  return (
    <Component
      className={clsx(headingVariants({ level: resolvedLevel }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export { Heading };
