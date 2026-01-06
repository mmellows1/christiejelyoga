import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cleanString } from "@/lib/helpers";
import { cn } from "@/lib/utils";

interface WithBlockWrapperOptions {
  [key: string]: any; // Optional options you may want to pass in
}

const withBlockWrapper = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options?: WithBlockWrapperOptions
) => {
  const Wrapper: React.FC<P> = (props) => {
    const { background, isFluid = false, padding, ...rest } = props as any;

    const sanitizedBackground = background
      ? cleanString(background)
      : "default";
    const [paddingTop, paddingBottom] = [
      padding?.top ? cleanString(padding.top) : "default",
      padding?.bottom ? cleanString(padding.bottom) : "default",
    ];
    return (
      <Section
        background={sanitizedBackground}
        padding={{ top: paddingTop, bottom: paddingBottom }}
      >
        <Container className={cn({ "max-w-full md:px-12 px-4": isFluid })}>
          <WrappedComponent {...rest} />
        </Container>
      </Section>
    );
  };
  const wrappedName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";
  Wrapper.displayName = `withBlockWrapper(${wrappedName})`;

  return Wrapper;
};

export { withBlockWrapper };
