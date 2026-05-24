"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import styles from "./Charts.module.css";

const data = [
  {
    name: "Calculations",
    value: 400,
  },
  {
    name: "Consultations",
    value: 300,
  },
  {
    name: "Users",
    value: 200,
  },
];

const COLORS = [
  "#D4AF37",
  "#F5D76E",
  "#8B6B16",
];

export default function PieAnalytics() {

  return (
    <div className={styles.chartCard}>

      <div className={styles.chartHeader}>
        <h3>
          Platform Analytics
        </h3>
      </div>

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
          >

            {data.map(
              (entry, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[index]
                  }
                />
              )
            )}

          </Pie>

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
}