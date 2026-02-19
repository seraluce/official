import styles from './sponsor.module.css'
import { metadata as layoutMetadata } from '../layout'

export const metadata = {
  title: '赞助 - ' + layoutMetadata.title,
  description: 'This is the sponsor page of ' + layoutMetadata.title,
}

export default function SponsorPage() {
  return (
    <main className={styles.main}>
    </main>
  )
}
