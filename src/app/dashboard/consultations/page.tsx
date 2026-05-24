import styles from "./consultations.module.css";

export default function ConsultationsPage() {
  return (
    <section>
      <div className={styles.header}>
        <h1>Consultations</h1>

        <p>
          User consultation requests
        </p>
      </div>

      <div className={styles.table}>
        Consultations Table Coming Soon
      </div>
    </section>
  );
}