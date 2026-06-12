"use client";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { motion } from "framer-motion";

const data = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 650 },
  { month: "Mar", users: 900 },
  { month: "Apr", users: 1200 },
  { month: "May", users: 1600 },
  { month: "Jun", users: 2100 },
];

export default function UsersChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full h-[250px] sm:h-[300px] md:h-[320px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          
          <CartesianGrid stroke="rgba(255,255,255,0.05)" />

          <XAxis
            dataKey="month"
            stroke="#aaa"
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            contentStyle={{
              background: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px",
            }}
          />

          <Bar
            dataKey="users"
            radius={[8, 8, 0, 0]}
            fill="#6366f1"
          />

        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}