"use client";

import styles from "@/components/privacyPolicy/PrivacyPolicy.module.css";

export default function TermsAndConditions() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.hero}>
          <span className={styles.badge}>
            Loanwise Legal
          </span>

          <h1>
            Terms & <span>Conditions</span>
          </h1>

          <p>
            Please read these terms carefully before
            using Loanwise services and calculators.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.section}>
            <h2>Acceptance of Terms</h2>

            <p>
              By using our website, calculators, and
              consultation services, you agree to comply
              with these terms and conditions.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Use of Calculators</h2>

            <p>
              EMI calculations provided on Loanwise are
              estimates for informational purposes only
              and may vary depending on lender policies.
            </p>
          </div>

          <div className={styles.section}>
            <h2>User Responsibilities</h2>

            <ul>
              <li>
                Provide accurate information in forms
              </li>

              <li>
                Avoid misuse of the platform
              </li>

              <li>
                Respect platform security and integrity
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Third-Party Services</h2>

            <p>
              Loanwise may integrate third-party tools or
              financial services. We are not responsible
              for external platform policies or actions.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Changes to Terms</h2>

            <p>
              We reserve the right to update or modify
              these terms at any time without prior
              notice.
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

