"use client";
import React, { useState } from "react";
import LoopingTypewriter from "../TypewriterEffect";
import { Button } from "../ui/button";
import { Check, ChevronRight, Copy, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";

const About = ({ setActive }: any) => {
  return (
    <main className=" lg:rounded-3xl bg-neutral-950">
      <div className="mx-auto  max-w-screen-md space-y-14  px-4 py-20 lg:space-y-20 lg:py-16">
        <section className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold ">Hello! I'm Ashish</h1>
            <p className="text-3xl font-bold text-orange-600 ">
              Full Stack Developer
            </p>
          </div>
          <div className="text-neutral-400 leading-relaxed sm:leading-normal max-w-prose">
            <span className="">
              I’m Ashish Kumar, a full-stack developer from New Delhi, India,
              with 3 years of experience building high-performance e-commerce
              platforms and scalable web applications using Next.js, React.js,
              and modern UI frameworks. With deep expertise in both frontend
              craftsmanship and backend architecture, I’ve developed and
              deployed multiple end-to-end solutions for my own
              ventures—Aftersole and Foldyfinds—managing everything from
              responsive UI/UX to real-time communication systems using
              Socket.IO and WhatsApp Cloud API. My technical versatility spans
              global state management, secure authentication, AWS cloud
              deployments, and complex API integrations, enabling me to deliver
              products that are both visually compelling and operationally
              robust.
            </span>
          </div>
          <div className="text-neutral-400 leading-relaxed sm:leading-normal max-w-prose">
            <span>
              Over the years, I’ve cultivated a product-first mindset, ensuring
              that every technical decision aligns with business objectives and
              user experience goals. Whether it’s migrating large-scale
              platforms to Next.js for performance gains, architecting MongoDB
              schemas for optimized data handling, or streamlining admin panel
              workflows for operational efficiency, I bring a balance of
              precision, creativity, and problem-solving to every project. My
              focus is on creating digital products that are not only functional
              and scalable but also elevate brand presence and drive measurable
              results.
            </span>
          </div>
          <div className="mt-3 flex items-center gap-4">
            <a
              href="/ashish-resume.pdf"
              download
              className="inline-flex text-sm items-center gap-2 px-5 py-2 bg-neutral-800 hover:bg-neutral-700 font-medium rounded-md transition-colors"
            >
              Download Resume <ExternalLink size={16} />
            </a>
          </div>
        </section>
        {/* Tools and Techs*/}
        <section className="mx-auto pr-4">
          <header className="flex items-center justify-between pb-8">
            <h2 className="text-3xl font-bold font-sans">Tools and Techs</h2>
          </header>

          <div className="*:bg-neutral-900  grid lg:grid-cols-3 grid-cols-2  gap-1  sm:gap-2 *:font-sans *:font-semibold *:rounded-lg *:p-4">
            <div>Next.js</div>
            <div>React.js</div>
            <div>Node.js</div>
            <div>Redux Toolkit</div>
            <div>MongoDB</div>
            <div>Express.js</div>
            <div>Socket.io</div>
            <div>AWS</div>
            <div>Nginx</div>
            <div>ChatGPT</div>
            <div>Shadcn/ui</div>
            <div>Figma</div>
          </div>
        </section>
        {/* Devices I Use */}
        <section className="mx-auto pr-4">
          <header className="flex items-center justify-between pb-8">
            <h2 className="text-3xl font-bold font-sans">Devices I Use</h2>
          </header>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Device 1 */}
            <div className="bg-neutral-900 rounded-lg p-4 flex items-center gap-4 border border-neutral-800 hover:border-neutral-700 transition">
              <Image
                src="https://images.unsplash.com/photo-1502783167913-8e718e555a06?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D"
                alt="MacBook Air M2"
                width={60}
                height={40}
                className="object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold">MacBook Air M2</h3>
                <p className="text-sm text-neutral-400">
                  Primary Development Device
                </p>
              </div>
            </div>

            {/* Device 2 */}
            <div className="bg-neutral-900 rounded-lg p-4 flex items-center gap-4 border border-neutral-800 hover:border-neutral-700 transition">
              <Image
                src="https://images.unsplash.com/photo-1585770536735-27993a080586?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="iPad Pro M2"
                width={60}
                height={40}
                className="object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold">iPad Pro M2</h3>
                <p className="text-sm text-neutral-400">
                  Design & Creative Work
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Education Section */}
        {/* <section className="mx-auto pr-4">
          <header className="flex items-center justify-between pb-8">
            <h2 className="text-3xl font-bold font-sans">Education</h2>
          </header>

          <div className="space-y-4">
        
            <div className="bg-neutral-900 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold font-sans">
                  SKRS INTER COLLEGE
                </h3>
                <p className="text-sm text-neutral-400">High School</p>
              </div>
              <span className="text-sm text-neutral-500">2016 – 2018</span>
            </div>

            <div className="bg-neutral-900 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold font-sans">
                  Raja Jait Singh Govt Polytechnic Haryana
                </h3>
                <p className="text-sm text-neutral-400">Mechanical Engineer</p>
              </div>
              <span className="text-sm text-neutral-500">2018 – 2021</span>
            </div>
          </div>
        </section> */}
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
      </div>
    </main>
  );
};

export default About;
