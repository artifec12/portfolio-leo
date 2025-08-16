"use client";

import { BreadCrumb } from "@/components/BreadCrumb";
import { blogs } from "@/static";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import { Mail, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import BlogContent from "@/components/ReactMarkdown";

const BlogIdPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const blog = blogs.find((p) => p.slug === id);

  if (!blog) {
    return (
      <main className="lg:rounded-3xl bg-neutral-950 text-center py-20">
        <h2 className="text-xl font-semibold text-white">Blog not found</h2>
      </main>
    );
  }

  const breadcrumbData = [
    { title: "Home", href: "/" },
    { title: "Blogs", href: "/blog" },
    { title: blog.title },
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      <main className="lg:rounded-3xl bg-neutral-950 text-white">
        <div className="mx-auto max-w-screen-lg px-4 py-20 lg:pt-10">
          {/* Breadcrumb */}
          <div className="py-6">
            <BreadCrumb items={breadcrumbData} />
          </div>

          {/* Hero Image */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[450px] rounded-2xl overflow-hidden mb-12 shadow-xl"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
              <h1 className="text-4xl md:text-5xl font-bold">{blog.title}</h1>
              <div className="flex gap-6 text-sm text-gray-300 mt-4">
                <span>📅 {blog.date}</span>
                <span>✍️ {blog.author.name}</span>
                <span>⏱ {blog.readTime}</span>
              </div>
            </div>
          </motion.section>

          {/* Blog Content */}
          <article>
            <p className="text-lg leading-relaxed">{blog.desc}</p>
            <BlogContent content={blog.content} />
          </article>

          <Separator className="my-16 bg-neutral-700" />

          {/* Related Blogs */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-neutral-100">
              Related Blogs
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {blogs
                .filter((b) => b.slug !== blog.slug)
                .slice(0, 2)
                .map((related, i) => (
                  <Link
                    key={i}
                    href={`/blog/${related.slug}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:shadow-lg transition duration-300"
                  >
                    <figure className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />
                    </figure>
                    <div className="p-5 flex flex-col gap-2">
                      <h3 className="font-semibold text-lg group-hover:text-neutral-100">
                        {related.title}
                      </h3>
                      <p className="text-sm text-neutral-400 line-clamp-2">
                        {related.desc}
                      </p>
                      <span className="text-xs text-neutral-500">
                        {related.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </section>

          <Separator className="my-16 bg-neutral-700" />

          {/* Contact CTA */}
          <section className="rounded-2xl border border-neutral-800 p-8 bg-neutral-900/50 shadow-lg">
            <h2 className="text-3xl font-bold mb-3">Got questions?</h2>
            <p className="text-neutral-400 mb-8 text-base max-w-xl">
              I’m always excited to collaborate on innovative and exciting
              projects. Feel free to reach out anytime 🚀
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-700 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">E-mail</p>
                  <p className="font-semibold">ashishleo12@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-700 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Phone</p>
                  <p className="font-semibold">+91 813-012-0840</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default BlogIdPage;
