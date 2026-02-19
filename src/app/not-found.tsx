import styles from "./not-found.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/layout/Button";

export default function NotFound() {
  return (
    <div className={styles.main}>
      <Image src="/404.png" alt="404" width={400} height={400} />
      <Button >
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
