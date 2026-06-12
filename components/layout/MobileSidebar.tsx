"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function MobileSidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-64 h-full bg-[#0a0a0a] z-50 p-6"
          >
            <h2 className="text-lg font-bold mb-6">Menu</h2>

            <div className="space-y-4">
              <div>Dashboard</div>
              <div>Analytics</div>
              <div>Settings</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}