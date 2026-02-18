import styles from './UserCard.module.css'
export default function UserCard() {
  return (
    <div className={styles.card}>
      <img src="https://github.com/vercel.png" alt="Vercel Logo" />
      <div>
        <h3>Vercel</h3>
        <p>Full Stack Web Developer</p>
      </div>
    </div>
  )
}
export const metadata = {
  title: 'User Card',
  description: 'A simple user card component',
}
