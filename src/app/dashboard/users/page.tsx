import styles from "./users.module.css";

export default function UsersPage() {
  return (
    <section>
      <div className={styles.header}>
        <h1>Users</h1>

        <p>
          Manage registered users
        </p>
      </div>

      <div className={styles.table}>
        Users Table Coming Soon
      </div>
    </section>
  );
}