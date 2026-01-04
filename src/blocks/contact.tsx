"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PortableText } from "@/components/ui/portable-text";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { urlFor } from "@/sanity/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { PortableTextBlock } from "next-sanity";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

interface ContactProps {
  content: PortableTextBlock[];
  image: any;
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
              <Textarea {...field} />
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
const Contact = ({ content, image }: ContactProps) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  let imageUrl = "";
  if (image) {
    imageUrl = urlFor(image).url();
  }

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
    <div className="grid grid-cols-12 gap-4 md:gap-24">
      <div className="col-span-12 md:col-span-6">
        <Image
          src={imageUrl}
          alt="contact-me"
          width={400}
          height={400}
          className="z-10 aspect-square object-cover object-center w-full"
        />
      </div>
      <div className="col-span-12 md:col-span-6">
        <PortableText value={content} />
        {!success ? (
          <ContactForm
            form={form}
            onSubmit={handleSubmit as any}
            loading={loading}
          />
        ) : (
          <Typography className="text-xl text-green-600 font-bold">
            Email sent!
          </Typography>
        )}
      </div>
    </div>
  );
};

export { Contact };
