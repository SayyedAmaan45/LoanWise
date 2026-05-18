import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.badge}>
            Error 404
          </div>

          <h1>
            Page Not Found
          </h1>

          <p>
            The page you are looking for doesn’t exist,
            was moved, or the URL may be incorrect.
          </p>

          <div className={styles.actions}>
            <Link
              href="/"
              className={styles.primaryBtn}
            >
              Back to Home
            </Link>

            <Link
              href="/contact"
              className={styles.secondaryBtn}
            >
              Contact Support
            </Link>
          </div>

          <div className={styles.grid}>
            <div className={styles.item}>
              <h3>EMI Calculator</h3>
              <p>
                Calculate accurate monthly EMIs instantly.
              </p>
            </div>

            <div className={styles.item}>
              <h3>Loan Consultation</h3>
              <p>
                Get expert guidance for smarter borrowing.
              </p>
            </div>

            <div className={styles.item}>
              <h3>Secure Platform</h3>
              <p>
                Your data stays encrypted and protected.
              </p>
            </div>
          </div>

          <div className={styles.glowOne}></div>
          <div className={styles.glowTwo}></div>
        </div>
      </div>
    </section>
  );
}