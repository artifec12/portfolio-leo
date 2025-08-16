"use client";
import React from "react";
import { Mail, Phone } from "lucide-react";
import ContactForm from "../ContactForm";
import { ScrollArea } from "../ui/scroll-area";

const Contact = ({ setActive }: any) => {
  return (
    <main className=" lg:rounded-3xl bg-neutral-950">
      <div className="mx-auto  max-w-screen-md space-y-14  px-4 py-20 lg:space-y-20 lg:py-16">
        {/* Intro Section */}
        <section className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold ">Contact</h1>
          </div>
        </section>

        {/* Seduled a call */}
        <section className="rounded-lg border border-neutral-800 p-6 !pb-6">
          <header className="space-y-2 pb-8">
            <h2 className="text-2xl font-bold mb-2">Got questions?</h2>
            <p className="text-neutral-400 mb-8 font-sans text-base">
              I’m always excited to collaborate on innovative and exciting
              projects!
            </p>
          </header>
          <div className="grid space-y-6 lg:grid-cols-2 lg:space-y-0">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center">
                <span className="border-primary/10 bg-primary/10 flex size-14 items-center justify-center rounded-full border">
                  <Mail />
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-neutral-400 font-semibold">E-mail</p>
                <p className="font-semibold text-white">
                  ashishleo12@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-neutral-900 flex items-center justify-center">
                <span className="border-primary/10 bg-primary/10 flex size-14 items-center justify-center rounded-full border">
                  <Phone />
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-neutral-400 font-semibold">Phone</p>
                <p className="font-semibold text-white">+91 813-012-0840</p>
              </div>
            </div>
          </div>
        </section>
        {/* Seduled a message*/}
        <section className="rounded-lg border border-neutral-800 p-6 !pb-6">
          {/* …your header + contact cards… */}
          <div className="mt-8">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
