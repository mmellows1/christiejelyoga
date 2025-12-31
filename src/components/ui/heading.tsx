import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const headingVariants = cva("font-sans font-bold", {
  variants: {
    level: {
      h1: "text-3xl md:text-5xl",
      h2: "text-2xl md:text-4xl",
      h3: "text-xl md:text-3xl",
      h4: "text-lg md:text-2xl",
      h5: "text-md md:text-xl",
      h6: "text-md md:text-lg",
    },
  },
  defaultVariants: {
    level: "h3",
  },
});

/* ------------------------------------------------------------
 * Polymorphic types
 * ------------------------------------------------------------ */

type HeadingElement = React.ElementType;

type HeadingProps<T extends HeadingElement = "h3"> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof headingVariants> &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/* ------------------------------------------------------------
 * Component
 * ------------------------------------------------------------ */

const Heading = <T extends HeadingElement = "h3">({
  as,
  level = "h3",
  className,
  children,
  ...props
}: HeadingProps<T>) => {
  const tag = as || level;
  const Component = tag ?? "h3";

  return (
    <Component className={clsx(headingVariants({ tag }), className)} {...props}>
      {children}
    </Component>
  );
};

export { Heading };
