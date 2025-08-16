"use client";
import {
  Briefcase,
  Github,
  House,
  Linkedin,
  Rss,
  SquareUserRound,
  Twitter,
  UserPen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // 👈 get current path

const Sidebar = ({ open, setOpen }: any) => {
  const pathname = usePathname(); // 👈 current URL

  const menuItems = [
    { label: "Homepage", icon: House, url: "/" },
    { label: "Projects", icon: Briefcase, url: "/projects" },
    { label: "About", icon: SquareUserRound, url: "/about" },
    { label: "Blog", icon: Rss, url: "/blog" },
    { label: "Contact", icon: UserPen, url: "/contact" },
  ];

  const socialLinks = [
    { label: "Twitter", icon: Twitter, href: "https://x.com/ashish_leo_dev" },
    {
      label: "Linkedin",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ashishleo/",
    },
    { label: "Github", icon: Github, href: "https://github.com/artifec12" },
  ];

  return (
    <div
      className={`
          fixed lg:static
          top-0 left-0 h-full max-w-xs w-full bg-neutral-900 z-10 border-r-1 sm:border-none border-neutral-700
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
    >
      <div className="w-full h-full py-6 px-4 lg:rounded-3xl bg-neutral-950 flex   flex-col">
        {/* Sidebar Header */}
        <div className="sidebar-header flex flex-col gap-2 mb-4">
          <ul>
            <Link href={"/"} onClick={() => setOpen(false)}>
              <li className="flex items-center gap-3">
                <Image
                  src="https://cdn.aftersole.com/uploads/c0c5d2ad-1238-4fd3-b6d2-3ef1198bc08d-avatar-leo.jpg"
                  alt="Ashish Kumar portfolio image"
                  width={2000}
                  priority
                  height={2000}
                  className="object-cover rounded-full w-14 h-14 aspect-auto"
                />
                <div className="flex flex-col gap-1 leading-none">
                  <span className="font-bold font-sans">Ashish Kumar</span>
                  <span className="text-gray-400 text-sm">
                    Full Stack Developer
                  </span>
                </div>
              </li>
            </Link>
          </ul>
        </div>

        {/* Sidebar Content */}
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="sidebar-group flex flex-col justify-center gap-4">
            {/* Menu Items */}
            <div className="sidebar-group-content">
              <ul className="flex flex-col gap-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.url;

                  return (
                    <Link
                      key={item.label}
                      href={item.url}
                      onClick={() => setOpen(false)}
                    >
                      <li
                        className={`flex items-center gap-x-4 px-4 rounded-xl py-3 cursor-pointer ${
                          isActive ? "bg-neutral-900" : "hover:bg-neutral-900"
                        }`}
                      >
                        <Icon className="w-5 h-5 text-neutral-400" />
                        <span className="font-sans font-semibold">
                          {item.label}
                        </span>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>

            {/* Social Links */}
            <div className="sidebar-group-label flex flex-col">
              <div className="mb-10">
                <span className="font-sans font-semibold text-sm text-gray-400">
                  Social
                </span>

                <ul className="flex mt-4 flex-col gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                      >
                        <li
                          className={`flex items-center gap-x-4 px-4 rounded-md py-3 hover:bg-neutral-900`}
                        >
                          <Icon className="w-5 h-5 text-neutral-400" />
                          <span className="font-sans font-semibold">
                            {social.label}
                          </span>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar Footer */}
      </div>
    </div>
  );
};

export default Sidebar;
