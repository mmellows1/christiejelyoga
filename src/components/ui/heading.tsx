import clsx from "clsx";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
const Heading = ({ children, className, level }: HeadingProps) => {
  const Tag = level;
  return (
    <Tag className={clsx("font-sans font-bold text-3xl", className)}>
      {children}
    </Tag>
  );
};

export { Heading };
