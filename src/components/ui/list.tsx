import { cva } from "class-variance-authority";
import clsx from "clsx";

const listVariants = cva(
  "text-body group group-[.bg-dark]:text-white  group-[.bg-brand]:text-black",
  {
    variants: {
      tag: {
        ul: "text-sm md:text-base",
        ol: "text-sm md:text-base",
      },
      variant: {
        default: "list-disc",
        checked: "list-check",
      },
    },
  }
);

const List = ({ tag, as, className, variant, children, ...props }: any) => {
  const Component = tag ?? "ul";
  return (
    <Component
      className={clsx(listVariants({ tag, variant }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export { List };
