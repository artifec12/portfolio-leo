"use client";
import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Separator } from "../ui/separator";
import { blogs } from "@/static";
import Link from "next/link";

const Blog = () => {
  return (
    <main className=" lg:rounded-3xl bg-neutral-950">
      <div className="mx-auto  max-w-screen-md space-y-14  px-4 py-20 lg:space-y-20 lg:py-16">
        {/* Intro Section */}

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
                    href={`/blog/${blog.slug}`}
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

export default Blog;
