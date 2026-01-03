import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cleanString } from "@/lib/helpers";

interface WithBlockWrapperOptions {
  [key: string]: any; // Optional options you may want to pass in
}

const withBlockWrapper = (
  WrappedComponent: React.ComponentType<P>,
  options?: WithBlockWrapperOptions
) => {
  const Wrapper: React.FC<P> = (props) => {
    const { background, padding, ...rest } = props;

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
        <Container>
          <WrappedComponent {...rest} {...options} />
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
