"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Home, BarChart, Settings } from "lucide-react";

const menu = [
  { name: "Dashboard", icon: Home, path: "/" },
  { name: "Analytics", icon: BarChart, path: "/analytics" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar({
  collapsed,
}: {
  collapsed: boolean;
}) {
  const pathname = usePathname();

  return (
    <motion.aside
      animate={{ width: collapsed ? 80 : 260 }}
      transition={{ duration: 0.4 }}
      className="hidden md:flex flex-col border-r border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Logo */}
      <div className="p-6 text-xl font-bold">
        {collapsed ? "S" : "SaaS"}
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2 px-2">
        {menu.map((item, i) => {
          const active = pathname === item.path;

          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition
                ${active ? "bg-white/15" : "hover:bg-white/10"}`}
            >
              <item.icon size={18} />

              {!collapsed && (
                <span className="text-sm">{item.name}</span>
              )}
            </motion.div>
          );
        })}
      </nav>
    </motion.aside>
  );
}