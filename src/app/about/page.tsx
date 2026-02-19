// about/page.tsx
import styles from './about.module.css'
import { metadata as layoutMetadata } from '../layout'

export const metadata = {
  title: '关于 - ' + layoutMetadata.title,
  description: 'This is the about page of ' + layoutMetadata.title,
}

export default function AboutPage() {
  return (
    <>
      <h1 className={styles.title}>About Page</h1>
    </>
  )
}