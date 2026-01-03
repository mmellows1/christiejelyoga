import {
  PortableTextBlock,
  PortableText as SanityPortableText,
} from "next-sanity";
import { Heading } from "./heading";
import { Button } from "./button";
import Link from "next/link";
import { Typography } from "./typography";
import { List } from "./list";

interface PortableTextProps {
  value: PortableTextBlock[];
}

const PortableText = ({ value }: PortableTextProps) => {
  return (
    <SanityPortableText
      value={value}
      components={{
        block: {
          h1: ({ children }) => (
            <Heading level="h1" as="h2" className="mb-4 text-heading">
              {children}
            </Heading>
          ),
          h2: ({ children }) => (
            <Heading level="h2" as="h3" className="mb-4 text-heading">
              {children}
            </Heading>
          ),
          h3: ({ children }) => (
            <Heading level="h3" as="h4" className="mb-4 text-heading">
              {children}
            </Heading>
          ),
          h4: ({ children }) => (
            <Heading level="h4" as="h5" className="mb-4 text-heading">
              {children}
            </Heading>
          ),
          h5: ({ children }) => (
            <Heading level="h5" as="h6" className="mb-4 text-heading">
              {children}
            </Heading>
          ),
          normal: ({ children }) => (
            <Typography className="mb-4">{children}</Typography>
          ),
          blockquote: ({ children }) => (
            <Typography
              tag="blockquote"
              className="p-4 bg-quote italic rounded-md mb-4 text-quote"
            >
              {children}
            </Typography>
          ),
        },
        list: {
          // Ex. 1: customizing common list types
          bullet: ({ children }) => (
            <List className="mt-xl pl-4.5 list-disc space-y-2 mb-4">
              {children}
            </List>
          ),
          number: ({ children }) => (
            <List
              tag="ol"
              className="mt-xl pl-4.5 list-decimal space-y-2 mb-4  text-body"
            >
              {children}
            </List>
          ),

          // Ex. 2: rendering custom lists
          checkmarks: ({ children }) => (
            <List
              variant="checked"
              className="mt-xl pl-4.5 list-item space-y-2 mb-4  text-body"
            >
              {children}
            </List>
          ),
        },
        marks: {
          link: ({ value, children }) => (
            <Link
              href={value?.href || "/"}
              rel="noopener noreferrer"
              className="text-link font-bold hover:underline"
            >
              {children}
            </Link>
          ),
          cta: ({ value, children }) => {
            const { href, blank, variant } = value || {};

            return (
              <Button asChild variant="default">
                <Link
                  href={value?.href || "/"}
                  target={blank ? "_blank" : "_self"}
                  rel={blank ? "noopener noreferrer" : undefined}
                >
                  {children}
                </Link>
              </Button>
            );
          },
        },
      }}
    />
  );
};

export { PortableText };
