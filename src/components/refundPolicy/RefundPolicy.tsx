"use client";
import styles from "@/components/privacyPolicy/PrivacyPolicy.module.css";

export default function RefundPolicy() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.hero}>
          <span className={styles.badge}>
            Loanwise Legal
          </span>

          <h1>
            Refund <span>Policy</span>
          </h1>

          <p>
            We believe in fair and transparent service
            policies for all Loanwise users.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.section}>
            <h2>Consultation Services</h2>

            <p>
              Most consultation services offered by
              Loanwise are free. If any paid services are
              introduced, refund eligibility will be
              clearly mentioned before purchase.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Refund Eligibility</h2>

            <ul>
              <li>
                Duplicate payments may qualify for refunds
              </li>

              <li>
                Technical transaction failures may be
                reviewed
              </li>

              <li>
                Requests must be submitted within 7 days
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>Non-Refundable Situations</h2>

            <p>
              Refunds may not apply once a consultation
              service has already been completed or
              delivered successfully.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Processing Time</h2>

            <p>
              Approved refunds are generally processed
              within 5–10 business days depending on your
              payment provider or bank.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Support</h2>

            <p>
              For refund-related concerns, please contact
              our support team with payment and
              transaction details.
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

