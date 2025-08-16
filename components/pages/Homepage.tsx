"use client";
import React, { useState } from "react";
import LoopingTypewriter from "../TypewriterEffect";
import { Button } from "../ui/button";
import { Check, ChevronRight, Copy, MapPin } from "lucide-react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Separator } from "../ui/separator";
import { projects, blogs } from "@/static";
import Link from "next/link";

const Homepage = ({ setActive }: any) => {
  const [copied, setCopied] = useState(false);
  const email = "ashishleo12@gmail.com";

  const words = [
    { text: "NextJs Developer!", className: "text-orange-500" },
    { text: "Full Stack Developer!", className: "text-green-600" },
  ];

  const upComingProjects = [
    {
      title: "Portfolio & Blogging Website",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=3432&auto=format&fit=crop",
    },
    {
      title: "Restaurant Reservation App",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=3432&auto=format&fit=crop",
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <main className=" lg:rounded-3xl bg-neutral-950">
      <div className="mx-auto  max-w-screen-md space-y-14  px-4 py-20 lg:space-y-20 lg:py-16">
        {/* Intro Section */}
        <section className="space-y-4">
          <div>
            <h1 className="text-3xl font-medium ">👋 Hey! I'm Ashish</h1>
            <div className="flex flex-col sm:flex-row sm:items-center w-full">
              <LoopingTypewriter words={words} />
              <div className="mt-4 sm:mt-0 sm:ml-auto">
                <Button className="border border-neutral-700 bg-transparent py-5">
                  <MapPin /> <span className="font-semibold">New Delhi</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="text-neutral-400 leading-relaxed sm:leading-normal max-w-prose">
            Full Stack Developer with 3 years of experience in{" "}
            <span className="font-medium text-white">React.js</span>,{" "}
            <span className="font-medium text-white">Next.js</span>, building
            fast, scalable, and visually rich web applications with a focus on{" "}
            <span className="font-medium text-white">performance</span>,{" "}
            <span className="font-medium text-white">SEO</span>, and modern UI
            design.
          </div>
          <div className="mt-3 flex items-center gap-4">
            <Link href={"/about"}>
              <Button className="cursor-pointer" variant={"destructive"}>
                <span>About</span>
              </Button>
            </Link>
            {!copied ? (
              <Button
                className="border border-neutral-700 cursor-pointer"
                onClick={handleCopy}
              >
                <Copy />
                <span className="font-semibold font-sans">Copy mail</span>
              </Button>
            ) : (
              <Button className="cursor-pointer border border-neutral-700">
                <Check />
                <span className="font-semibold font-sans">Copied</span>
              </Button>
            )}
          </div>
        </section>

        {/* Selected Work Section */}
        <section>
          <header className="flex items-center justify-between pb-8">
            <h2 className="text-3xl font-bold font-sans">Projects</h2>
            {/* <Button
                className="flex cursor-pointer text-orange-300 items-center gap-1 hover:bg-transparent bg-transparent"
                onClick={() => setActive("Projects")}
              >
                <span className="hover:underline hover:underline-offset-4">
                  View All
                </span>
                <ChevronRight />
              </Button> */}
          </header>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={`/projects/${project.slug}`}
                className="flex flex-col overflow-hidden hover:opacity-90 transition h-full"
              >
                <figure className="flex-shrink-0">
                  <Image
                    className="w-full h-60 object-cover rounded-md"
                    width={4000}
                    height={4000}
                    priority
                    alt={project.title}
                    src={project.image}
                  />
                </figure>
                <div className="flex flex-col flex-grow py-4 space-y-2">
                  <h5 className="font-semibold">{project.title}</h5>
                  <div className="text-sm text-neutral-400">{project.year}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        {/* upcomming projects */}
        <section>
          <header className="flex items-center justify-between pb-8">
            <h2 className="text-3xl font-bold font-sans">Upcoming Projects</h2>
          </header>

          <div className="grid gap-4 lg:grid-cols-2">
            {upComingProjects.map((project, index) => (
              <div key={index}>
                <figure>
                  <Image
                    className="aspect-[4-3] w-full rounded-lg"
                    width={4000}
                    height={4000}
                    alt={project.title}
                    src={project.image}
                  />
                </figure>
                <div className="space-y-2">
                  <h5 className="font-semibold mt-2">{project.title}</h5>
                  <div className="text-sm">{project.year}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* blogs */}
        <section className=" mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8">Recent Blogs</h2>
          <div className="space-y-10">
            {blogs.map((blog, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6"
              >
                {/* Left Text */}
                <div className="order-2 md:order-1">
                  <p className="text-gray-400 text-sm">{blog.date}</p>
                  <h3 className="text-2xl font-semibold mt-2">{blog.title}</h3>
                  <Separator className="mt-4 bg-gray-500" />
                  <a
                    href={blog.slug}
                    className="flex items-center text-red-500 mt-3 hover:underline"
                  >
                    <span>Read</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>

                {/* Right Image */}
                <div className="order-1 md:order-2">
                  <Link href={`/blog/${blog.slug}`}>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={250}
                      className="rounded-lg w-full object-cover"
                    />
                  </Link>
                </div>
              </div>
            ))}
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
      </div>
    </main>
  );
};

export default Homepage;
