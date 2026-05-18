"use client";
import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.hero}>
          <span className={styles.badge}>
            Loanwise Legal
          </span>

          <h1>
            Privacy <span>Policy</span>
          </h1>

          <p>
            We value your privacy and are committed to
            protecting your personal and financial
            information with complete transparency and
            security.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.section}>
            <h2>Information We Collect</h2>

            <p>
              We may collect your name, email address,
              phone number, loan preferences, and other
              information you voluntarily provide through
              forms or EMI calculations.
            </p>
          </div>

          <div className={styles.section}>
            <h2>How We Use Your Information</h2>

            <ul>
              <li>
                Provide personalized loan consultation
              </li>

              <li>
                Improve calculator accuracy and services
              </li>

              <li>
                Respond to support and inquiries
              </li>

              <li>
                Maintain website security and performance
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Data Protection</h2>

            <p>
              Your information is stored securely and is
              never sold to third parties. We use
              industry-standard security practices to
              safeguard your data.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Cookies</h2>

            <p>
              We may use cookies to enhance your browsing
              experience, analyze website traffic, and
              improve platform functionality.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Contact Us</h2>

            <p>
              If you have any questions regarding our
              privacy practices, feel free to contact our
              support team anytime.
            </p>
          </div>

          <div className={styles.footer}>
            Last Updated • May 2026
          </div>
        </div>
      </div>
    </section>
  );
};

