"use client";

import { useState } from "react";

import DashboardSidebar from "../sidebar/DashboardSidebar";

import DashboardTopbar from "../topbar/DashboardTopbar";

import styles from "@/app/dashboard/dashboard.module.css";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {

  const [
    sidebarOpen,
    setSidebarOpen,
  ] = useState(false);

  return (

    <div className={styles.layout}>

      <DashboardSidebar
        sidebarOpen={
          sidebarOpen
        }
        setSidebarOpen={
          setSidebarOpen
        }
      />

      <div className={styles.main}>

        <DashboardTopbar
          setSidebarOpen={
            setSidebarOpen
          }
        />

        <div className={styles.content}>
          {children}
        </div>

      </div>

    </div>
  );
}