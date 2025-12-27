"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import z from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface ContactProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

const formSchema = z.object({
  name: z.string().min(1, {
    error: "Name is required",
  }),
  email: z.string().min(1, { error: "Email is required" }).email(),
  message: z
    .string({ error: "Message is required" })
    .min(1, { error: "Message is required" }),
});
const ContactForm = ({
  form,
  onSubmit,
  loading,
}: {
  form: any;
  onSubmit: () => void;
  loading: boolean;
}) => (
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea placeholder="Type your message here." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button disabled={loading} className="mt-8" type="submit">
        Submit
      </Button>
    </form>
  </Form>
);
const Contact = ({ title, description, image }: ContactProps) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (data: any) => {
    setLoading(true);
    fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        setSuccess(true);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Section className="bg-white">
      <Container>
        <div className="grid grid-cols-12 md:gap-24">
          <div className="col-span-6">
            <Image
              {...image}
              width={400}
              height={400}
              className="z-10 aspect-video object-cover object-center w-full"
            />
          </div>
          <div className="col-span-6">
            <Heading level="h2" className="font-bold">
              {title}
            </Heading>
            <p className="text-xl mb-4">{description}</p>
            {!success ? (
              <ContactForm
                form={form}
                onSubmit={handleSubmit as any}
                loading={loading}
              />
            ) : (
              <p className="text-xl text-green-600 font-bold">Email sent!</p>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { Contact };
