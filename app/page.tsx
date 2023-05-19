import styles from './home.module.css'

interface FormValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
}

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <h1>Home page design sample</h1>
    </main>
  )
}
