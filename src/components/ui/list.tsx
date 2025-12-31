import { cva } from "class-variance-authority";
import clsx from "clsx";

const listVariants = cva("font-sans font-bold", {
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
});

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
