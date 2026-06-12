"use client";

import { Menu, PanelLeft } from "lucide-react";
import { motion } from "framer-motion";
import NotificationDropdown from "@/components/ui/NotificationDropdown";
import ProfileDropdown from "@/components/ui/ProfileDropdown";


export default function Topbar({
  setOpen,
  collapsed,
  setCollapsed,
}: {
  setOpen: (v: boolean) => void;
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 md:px-6 h-16 border-b border-white/10 bg-white/5 backdrop-blur-xl">
      
      <div className="flex items-center gap-3">
        
        {/* Mobile menu */}
        <button onClick={() => setOpen(true)} className="md:hidden">
          <Menu size={22} />
        </button>

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden md:block"
        >
          <PanelLeft size={20} />
        </button>
      </div>

      <h1 className="font-semibold">Dashboard</h1>
        <div className="flex items-center gap-3">
  <NotificationDropdown />
  <ProfileDropdown />
</div>
    </header>
  );
}