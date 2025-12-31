import { cva } from "class-variance-authority";
import clsx from "clsx";

const typographyVariants = cva("font-sans font-bold", {
  variants: {
    tag: {
      p: "text-sm md:text-base",
      span: "text-sm md:text-base",
      i: "text-sm md:text-base",
      em: "text-sm md:text-base",
    },
  },
  defaultVariants: {
    tag: "p",
  },
});

const Typography = ({ tag, as, className, children, ...props }: any) => {
  const Component = tag ?? "p";
  return (
    <Component
      className={clsx(typographyVariants({ tag }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export { Typography };
