import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'


export const metadata: Metadata = {
  title: 'About',
  description: 'This is the about page',
}
export default function AboutPage() {
  return (
    <main className={styles.main}>
      <Header />
      <h1 className={styles.title}>About Page</h1>
      <p className={styles.description}>
        This is the about page of the website.
      </p>
      <Link href="/" className={styles.link}>
        Go to Home
      </Link>
      <Image src="/logo.png" alt="Logo" width={100} height={100} className={styles.logo} />
      <Footer />
    </main>
  )
}
