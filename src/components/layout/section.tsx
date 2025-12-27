import clsx from "clsx";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section className={clsx("py-24", className)} {...props}>
      {children}
    </section>
  );
};

export { Section };
