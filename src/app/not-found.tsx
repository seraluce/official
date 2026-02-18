import styles from "./not-found.module.css";
export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.dot} />
      <div className={styles.text}>404</div>
    </div>
  );
}
