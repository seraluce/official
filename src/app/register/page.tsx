import styles from './register.module.css'
import type { Metadata } from 'next'
import { metadata as layoutMetadata } from '../layout'
export const metadata: Metadata = {
  title: '注册 - ' + layoutMetadata.title,
  description: '注册 ' + layoutMetadata.title + ' 账户',
}
export default function RegisterPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Register</h1>
    </main>
  )
}
