"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

export default function AnimatedStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {["Revenue", "Users", "Growth", "Performance"].map((item, i) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Card>{item}</Card>
        </motion.div>
      ))}
    </div>
  );
}