"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";

type UserType = {
  id: string;
  email: string;
  role: string;
};

export default function Navbar() {
  const [user, setUser] =
    useState<UserType | null>(null);


  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
       const response = await fetch(
  "/api/auth/me",
  {
    cache: "no-store",
  }
);

        const data =
          await response.json();

        if (data.success) {
          setUser(data.user);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

  window.location.href = "/";
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link
            href="/"
            className={styles.logo}
          >
            LoanWise
          </Link>

          <ul className={styles.links}>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>

            <li>
              <Link href="/calculators">
                Calculators
              </Link>
            </li>

            <li>
              <Link href="/pricing">
                Pricing
              </Link>
            </li>

            <li>
              <Link href="/consultation">
                Consultation
              </Link>
            </li>

            {/* ONLY ADMIN */}
            {!loading &&
              user?.role ===
                "admin" && (
                <li>
                  <Link href="/dashboard">
                    Dashboard
                  </Link>
                </li>
              )}
          </ul>
          <div className={styles.actions}>
            {!loading && user ? (
              <button
                onClick={
                  handleLogout
                }
                 className={
                    styles.cta
                  }
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className={
                    styles.login
                  }
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className={
                    styles.cta
                  }
                >
                  Start Free
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}