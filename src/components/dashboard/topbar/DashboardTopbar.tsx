"use client";

import styles from "./DashboardTopbar.module.css";

import {
  HiMenuAlt3,
} from "react-icons/hi";

type Props = {
  setSidebarOpen: (
    value: boolean
  ) => void;
};

export default function DashboardTopbar({
  setSidebarOpen,
}: Props) {

  return (

    <header className={styles.topbar}>

      {/* LEFT */}

      <div className={styles.left}>

        <button
          className={styles.menuBtn}
          onClick={() =>
            setSidebarOpen(true)
          }
        >
          <HiMenuAlt3 />
        </button>

        <div className={styles.text}>

          <h2>
            Admin Dashboard
          </h2>

          <p>
            Monitor platform analytics
          </p>

        </div>

      </div>

      {/* RIGHT */}

      <div className={styles.right}>

        <div className={styles.profileInfo}>

          <h4>
            Admin
          </h4>

          <p>
            Super Admin
          </p>

        </div>

        <div className={styles.profile}>
          A
        </div>

      </div>

    </header>
  );
}