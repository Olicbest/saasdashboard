"use client";

import { motion } from "framer-motion";

const filters = ["7d", "30d", "90d"];

export default function ChartFilter({
  active,
  setActive,
}: {
  active: string;
  setActive: (v: string) => void;
}) {
  return (
    <div className="flex gap-2">
      {filters.map((f) => (
        <motion.button
          key={f}
          onClick={() => setActive(f)}
          whileTap={{ scale: 0.95 }}
          className={`px-3 py-1 text-xs sm:text-sm rounded-lg transition
            ${
              active === f
                ? "bg-white text-black"
                : "bg-white/10 text-white/70 hover:bg-white/20"
            }`}
        >
          {f}
        </motion.button>
      ))}
    </div>
  );
}