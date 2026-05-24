import styles from "./analytics.module.css";

export default function AnalyticsPage() {
  return (
    <section>
      <div className={styles.header}>
        <h1>Analytics</h1>

        <p>
          LoanWise platform analytics overview
        </p>
      </div>

      <div className={styles.chart}>
        Analytics Charts Coming Soon
      </div>
    </section>
  );
}