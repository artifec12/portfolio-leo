"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import MenuClose from "./MenuClose";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(true); // show sidebar on desktop
      } else {
        setOpen(false); // hide sidebar on mobile initially
      }
    };

    handleResize(); // run once
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex w-full gap-4 relative">
      <Sidebar open={open} setOpen={setOpen} />

      <div className="w-full">
        {children}
        <MenuClose open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default ClientLayout;
