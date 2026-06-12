"use client";

import { motion } from "framer-motion";

export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-white/10 transition overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />
      
      {children}
    </motion.div>
  );
}