// about/page.tsx
import styles from './about.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <h1 className={styles.title}>About Page</h1>
      <p className={styles.description}>...</p>
      <Link href="/" className={styles.link}>Go to Home</Link>
      <Image src="/logo.png" alt="Logo" width={100} height={100} className={styles.logo} />
    </>
  )
}