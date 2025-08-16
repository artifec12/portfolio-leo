"use client";
import React from "react";
import { projects } from "@/static";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, Phone } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { BreadCrumb } from "./BreadCrumb";

const ProjectComp = ({ slug }: { slug: string }) => {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="lg:rounded-3xl bg-neutral-950 text-center py-20">
        <h2 className="text-xl font-semibold text-white">Project not found</h2>
      </main>
    );
  }

  const breadcrumbData = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: project?.title,
    },
  ];

  return (
    <main className="lg:rounded-3xl bg-neutral-950 text-white">
      <div className="mx-auto  max-w-screen-md space-y-14  px-4 py-20 lg:space-y-20 lg:py-16">
        {/* Back Button */}
        <section className="space-y-4">
          <BreadCrumb items={breadcrumbData} />

          {/* Title & Meta Info */}
          <h1 className="text-3xl font-bold">{project.title}</h1>
        </section>
        <section className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 font-sans gap-6 text-gray-400">
            <div>
              <p className="text-sm ">Date</p>
              <p className="text-white text-xs">{project.year}</p>
            </div>
            <div>
              <p className="text-sm ">Service</p>
              <p className="text-white text-xs">{project.services}</p>
            </div>
            <div>
              <p className="text-sm ">Client</p>
              <p className="text-white text-xs">{project.client}</p>
            </div>
          </div>

          {/* Preview Button */}
          {project.previewUrl && (
            <Link
              href={project.previewUrl}
              target="_blank"
              className="inline-flex text-sm items-center gap-2 px-5 py-2 bg-neutral-800 hover:bg-neutral-700 font-medium rounded-md transition-colors"
            >
              Preview <ExternalLink size={16} />
            </Link>
          )}
        </section>
        <section className="space-y-4">
          {/* Project Image */}
          <figure className="flex w-full items-center justify-center">
            <Image
              className="w-full max-w-[40rem] backdrop-opacity-10 rounded-xl border border-neutral-800"
              width={1600}
              height={900}
              alt={project.title}
              src={project.image}
            />
          </figure>

          {/* Description */}
          <p className="text-gray-400 font-sans text-justify w-full  leading-relaxed">
            {project.desc}
          </p>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="mt-6 w-full  ">
              <h2 className="text-2xl font-semibold mb-4 text-neutral-300">
                Key Features:
              </h2>
              <ul className="list-disc  list-inside space-y-1 text-gray-400">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <Separator className="w-full max-w-full bg-neutral-700" />

        {/* Selected Work Section */}
        <section>
          <header className="flex items-center justify-between pb-8">
            <h2 className="text-2xl text-neutral-300 font-bold font-sans">
              More Projects
            </h2>
          </header>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects
              .filter((p) => p.slug !== slug) // ✅ exclude current project
              .slice(0, 4)
              .map((project, index) => (
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
                      alt={project.title}
                      src={project.image}
                    />
                  </figure>
                  <div className="flex flex-col flex-grow py-4 space-y-2">
                    <h5 className="font-semibold">{project.title}</h5>
                    <div className="text-sm text-neutral-400">
                      {project.year}
                    </div>
                  </div>
                </Link>
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

export default ProjectComp;
