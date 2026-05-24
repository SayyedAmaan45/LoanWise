"use client";

import Link from "next/link";

import styles from "./Navbar.module.css";

import {
  useEffect,
  useState,
} from "react";

import {
  usePathname,
} from "next/navigation";

import {
  HiMenuAlt3,
  HiX,
} from "react-icons/hi";

type UserType = {
  id: string;
  email: string;
  role: string;
};

export default function Navbar() {

  const pathname =
    usePathname();

  const [user, setUser] =
    useState<UserType | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  useEffect(() => {

    const fetchUser =
      async () => {

        try {

          const response =
            await fetch(
              "/api/auth/me",
              {
                cache:
                  "no-store",
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

  const handleLogout =
    async () => {

      await fetch(
        "/api/auth/logout",
        {
          method: "POST",
        }
      );

      window.location.href =
        "/";
    };

  // HIDE NAVBAR ON DASHBOARD

  if (
    pathname.startsWith(
      "/dashboard"
    )
  ) {
    return null;
  }

  return (

    <header className={styles.header}>

      <div className="container">

        <nav className={styles.nav}>

          {/* LOGO */}

          <Link
            href="/"
            className={styles.logo}
          >
            LoanWise
          </Link>

          {/* DESKTOP LINKS */}

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

          {/* ACTIONS */}

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

          {/* HAMBURGER */}

          <button
            className={
              styles.hamburger
            }
            onClick={() =>
              setMobileMenu(
                !mobileMenu
              )
            }
          >
            {mobileMenu ? (
              <HiX />
            ) : (
              <HiMenuAlt3 />
            )}
          </button>

        </nav>

        {/* MOBILE MENU */}

        <div
          className={`${styles.mobileMenu} ${
            mobileMenu
              ? styles.mobileMenuOpen
              : ""
          }`}
        >

          <Link
            href="/"
            onClick={() =>
              setMobileMenu(false)
            }
          >
            Home
          </Link>

          <Link
            href="/calculators"
            onClick={() =>
              setMobileMenu(false)
            }
          >
            Calculators
          </Link>

          <Link
            href="/pricing"
            onClick={() =>
              setMobileMenu(false)
            }
          >
            Pricing
          </Link>

          <Link
            href="/consultation"
            onClick={() =>
              setMobileMenu(false)
            }
          >
            Consultation
          </Link>

          {!loading &&
            user?.role ===
              "admin" && (
              <Link
                href="/dashboard"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                Dashboard
              </Link>
            )}

          {!loading &&
          user ? (

            <button
              onClick={
                handleLogout
              }
              className={
                styles.mobileLogout
              }
            >
              Logout
            </button>

          ) : (

            <>

              <Link
                href="/login"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                Login
              </Link>

              <Link
                href="/register"
                className={
                  styles.mobileCTA
                }
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                Start Free
              </Link>

            </>

          )}


        </div>

      </div>

    </header>
  );  
}