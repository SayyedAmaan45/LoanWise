"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import styles from "./Charts.module.css";

const data = [
  { month: "Jan", users: 40 },
  { month: "Feb", users: 65 },
  { month: "Mar", users: 90 },
  { month: "Apr", users: 120 },
  { month: "May", users: 150 },
  { month: "Jun", users: 210 },
];

export default function RevenueChart() {

  return (
    <div className={styles.chartCard}>

      <div className={styles.chartHeader}>
        <h3>
          User Growth Analytics
        </h3>
      </div>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <LineChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#222"
          />

          <XAxis
            dataKey="month"
            stroke="#999"
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="users"
            stroke="#D4AF37"
            strokeWidth={4}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}