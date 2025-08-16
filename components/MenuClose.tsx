"use client";

import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const MenuClose = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) => {
  return (
    <div className="absolute lg:hidden z-50 right-4 top-4">
      <Button
        className="bg-transparent p-3 rounded-full"
        onClick={() => setOpen(!open)}
      >
        {open ? <X className="!w-6 !h-6" /> : <Menu className="!w-6 !h-6" />}
      </Button>
    </div>
  );
};

export default MenuClose;
