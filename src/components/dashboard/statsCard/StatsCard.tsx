import styles from "./StatsCard.module.css";

export default function StatsCard({
  title,
  value,
  icon,
}: any) {

  return (
    <div className={styles.card}>

      <div className={styles.icon}>
        {icon}
      </div>

      <div>
        <h3>{title}</h3>

        <span>{value}</span>
      </div>

    </div>
  );
}