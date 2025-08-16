import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/clientLayout";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Ashish Kumar (Leo) | Portfolio",
  description:
    "Personal portfolio of Ashish Kumar (Leo) — Full-stack developer crafting modern, responsive, and user-friendly web applications using Next.js, React, and Tailwind CSS. Showcasing projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-neutral-900 text-white/80  antialiased`}>
        <div className="flex relative xl:w-[70%] w-full mx-auto text-white lg:gap-4">
          <ClientLayout>{children}</ClientLayout>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
