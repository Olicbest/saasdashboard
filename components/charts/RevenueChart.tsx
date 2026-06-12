"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from "recharts";

import { motion } from "framer-motion";
import { useState } from "react";
import ChartFilter from "./ChartFilter";

const datasets: any = {
  "7d": [
    { month: "Mon", revenue: 4000 },
    { month: "Tue", revenue: 6000 },
    { month: "Wed", revenue: 5000 },
    { month: "Thu", revenue: 7000 },
    { month: "Fri", revenue: 9000 },
    { month: "Sat", revenue: 11000 },
    { month: "Sun", revenue: 13000 },
  ],
  "30d": [
    { month: "Week 1", revenue: 12000 },
    { month: "Week 2", revenue: 18000 },
    { month: "Week 3", revenue: 24000 },
    { month: "Week 4", revenue: 32000 },
  ],
  "90d": [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 18000 },
    { month: "Mar", revenue: 26000 },
  ],
};

export default function RevenueChart() {
  const [filter, setFilter] = useState("30d");

  return (
    <motion.div
      key={filter}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xs sm:text-sm text-white/60">Revenue</h2>
        <ChartFilter active={filter} setActive={setFilter} />
      </div>

      {/* Chart */}
      <div className="w-full h-[240px] sm:h-[300px] md:h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={datasets[filter]}>
            
            <defs>
              <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
            </defs>

            <CartesianGrid stroke="rgba(255,255,255,0.05)" />

            <XAxis dataKey="month" stroke="#aaa" tickLine={false} axisLine={false} />

            <Tooltip
              contentStyle={{
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
              }}
            />

            <Area type="monotone" dataKey="revenue" fill="url(#rev)" stroke="none" />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={false}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}