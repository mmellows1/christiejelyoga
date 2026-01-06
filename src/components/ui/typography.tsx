import { cva } from "class-variance-authority";
import clsx from "clsx";

const typographyVariants = cva(
  "tracking-wide text-body group-[.bg-dark]:text-white group-[.bg-brand]:text-black",
  {
    variants: {
      tag: {
        p: "md:text-base",
        span: "md:text-base",
        i: "md:text-base",
        em: "md:text-base",
      },
    },
    defaultVariants: {
      tag: "p",
    },
  }
);

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
