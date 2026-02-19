import styles from './sponsor.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Sponsor',
  description: 'This is the sponsor page',
}
export default function SponsorPage() {
  return (
    <main className={styles.main}>
      <Header />
      <h1 className={styles.title}>Sponsor Page</h1>
      <p className={styles.description}>
        This is the sponsor page of the website.
      </p>
      <Link href="/" className={styles.link}>
        Go to Home
      </Link>
      <Footer />
    </main>
  )
}
