import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.beian}>
        <p>京ICP备2021033210号</p>
      </div>
      <div className={styles.copyright}>
        <p>Copyright &copy; 2021-2023 Su. All rights reserved.</p>
      </div>
    </footer>
  )
}
