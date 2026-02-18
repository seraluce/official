import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Image src="/logo.png" alt="Logo" width={100} height={100} className={styles.logo} />
      <p>Privacy Policy</p>
      <p>Copyright &copy; 2023</p>
    </footer>
  )
}
