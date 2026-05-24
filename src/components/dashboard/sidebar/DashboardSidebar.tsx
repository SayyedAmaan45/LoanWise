"use client";

import Link from "next/link";

import {
  FaChartPie,
  FaUsers,
  FaCalculator,
  FaHome,
} from "react-icons/fa";

import {
  MdSupportAgent,
} from "react-icons/md";

import {
  IoClose,
} from "react-icons/io5";

import styles from "./DashboardSidebar.module.css";

import { usePathname } from "next/navigation";

const links = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: <FaChartPie />,
  },

  {
    name: "Calculations",
    href:
      "/dashboard/calculations",
    icon: <FaCalculator />,
  },

  {
    name: "Consultations",
    href:
      "/dashboard/consultations",
    icon: <MdSupportAgent />,
  },

  {
    name: "Users",
    href: "/dashboard/users",
    icon: <FaUsers />,
  },
  {
    name: "Back to Home",
    href: "/",
  icon: <FaHome/>  },
];

type Props = {
  sidebarOpen: boolean;

  setSidebarOpen: (
    value: boolean
  ) => void;
};

export default function DashboardSidebar({
  sidebarOpen,
  setSidebarOpen,
}: Props) {

  const pathname =
    usePathname();

  return (

    <>
      {/* OVERLAY */}

      {sidebarOpen && (
        <div
          className={styles.overlay}
          onClick={() =>
            setSidebarOpen(false)
          }
        />
      )}

      <aside
        className={`${styles.sidebar}
        ${
          sidebarOpen
            ? styles.open
            : ""
        }`}
      >

        <div className={styles.top}>

          <div className={styles.logo}>
            LoanWise
          </div>

          <button
            className={styles.closeBtn}
            onClick={() =>
              setSidebarOpen(false)
            }
          >
            <IoClose />
          </button>

        </div>

        <div className={styles.links}>

          {links.map((link) => (

            <Link
              key={link.name}
              href={link.href}
              className={`${
                styles.link
              } ${
                pathname ===
                link.href
                  ? styles.active
                  : ""
              }`}
              onClick={() =>
                setSidebarOpen(false)
              }
            >

              <span>
                {link.icon}
              </span>

              {link.name}

            </Link>

          ))}

        </div>

      </aside>
    </>
  );
}