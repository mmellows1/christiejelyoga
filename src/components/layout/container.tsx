import clsx from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div className={clsx("container mx-auto max-w-5xl", className)} {...props}>
      {children}
    </div>
  );
};

export { Container };
