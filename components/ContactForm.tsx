"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactSchema = z.object({
  name: z.string().min(2, "Please enter at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

type ContactValues = z.infer<typeof ContactSchema>;

export default function ContactForm() {
  const [submitting, setSubmitting] = React.useState(false);

  const form = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onTouched",
  });

  async function onSubmit(values: ContactValues) {
    try {
      setSubmitting(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Failed to send email");

      form.reset();
      toast.success("Thanks! Your message has been sent successfully.");
    } catch (e) {
      console.error(e);
      toast.error("❌ Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-neutral-300">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your full name"
                  {...field}
                  className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-neutral-300">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  {...field}
                  className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500"
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-neutral-300">Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Tell me about your project or question…"
                  {...field}
                  className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500 resize-y"
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-3 pt-2">
          <Button
            type="submit"
            disabled={submitting}
            className="cursor-pointer px-6 py-5"
          >
            {submitting ? "Sending…" : "Send Message"}
          </Button>
          <span className="text-xs text-neutral-500">
            I’ll reply within 12-24 hours.
          </span>
        </div>
      </form>
    </Form>
  );
}
