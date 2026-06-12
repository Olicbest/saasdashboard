"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Avatar */}
      <motion.div
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        className="w-8 h-8 rounded-full bg-white/20 cursor-pointer"
      />

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-lg p-2 z-50"
          >
            <div className="px-3 py-2 text-sm hover:bg-white/10 rounded-lg cursor-pointer">
              Profile
            </div>
            <div className="px-3 py-2 text-sm hover:bg-white/10 rounded-lg cursor-pointer">
              Settings
            </div>
            <div className="px-3 py-2 text-sm hover:bg-white/10 rounded-lg cursor-pointer text-red-400">
              Logout
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}