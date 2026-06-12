"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bell } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function NotificationDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
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
      {/* Bell */}
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-lg hover:bg-white/10 transition"
      >
        <Bell size={20} />

        {/* Badge */}
        <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full" />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-72 sm:w-80 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-lg p-4 z-50"
          >
            <h3 className="text-sm font-semibold mb-3">Notifications</h3>

            <div className="space-y-3 text-sm text-white/70">
              <div className="hover:text-white transition">
                New user signed up
              </div>
              <div className="hover:text-white transition">
                Payment received
              </div>
              <div className="hover:text-white transition">
                Server updated
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}