"use client";

import { useEffect, useState } from "react";

import styles from "./DashboardHome.module.css";
import StatsCard from "../statsCard/StatsCard";
import RevenueChart from "../charts/RevenueChart";
import PieAnalytics from "../charts/PieAnalytics";
import RecentCalculations from "../tables/RecentCalculations";

import {
    FaUsers,
    FaCalculator,
    FaMoneyBillWave,
} from "react-icons/fa";

import {
    MdSupportAgent,
} from "react-icons/md";

export default function DashboardHome() {

    const [stats, setStats] =
        useState<any>(null);

    useEffect(() => {

        const fetchStats =
            async () => {

                const response =
                    await fetch(
                        "/api/admin/stats"
                    );

                const data =
                    await response.json();

                if (data.success) {
                    setStats(data.stats);
                }
            };

        fetchStats();

    }, []);

    return (
        <section>

            <div className={styles.top}>

                <div>
                    <h1>
                        Dashboard Overview
                    </h1>

                    <p>
                        Monitor users, analytics, consultations,
                        and platform growth in real-time.
                    </p>
                </div>

            </div>

            <div className={styles.statsGrid}>

                <StatsCard
                    title="Users"
                    value={stats?.users || 0}
                    icon={<FaUsers />}
                />

                <StatsCard
                    title="Calculations"
                    value={
                        stats?.calculations || 0
                    }
                    icon={<FaCalculator />}
                />

                <StatsCard
                    title="Consultations"
                    value={
                        stats?.consultations ||
                        0
                    }
                    icon={<MdSupportAgent />}
                />

                <StatsCard
                    title="Revenue"
                    value={`₹${stats?.revenue}`}
                    icon={
                        <FaMoneyBillWave />
                    }
                />

            </div>

            <div className={styles.chartGrid}>

                <RevenueChart />

                <PieAnalytics />

            </div>

            <RecentCalculations />

        </section>
    );
}