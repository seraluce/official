import styles from "./error.module.css";
export default function Error() {
  return (
    <div className={styles.error}>
      <div className={styles.dot} />
      <div className={styles.text}>500</div>
    </div>
  );
}
