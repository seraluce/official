import styles from "./page.module.css";
import { metadata as layoutMetadata } from "./layout";


export const metadata = {
  title: layoutMetadata.title + ' - 敢为天下先',
  description: 'This is the sponsor page of ' + layoutMetadata.title,
}
export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to Next.js</h1>
    </main>
  );
}
