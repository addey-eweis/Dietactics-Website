import Image from 'next/image'
import styles from './page.module.css'
import HomePage from "@/app/components/Homepage/HomePage";

export default function Home() {
  return (
    <main className={styles.main}>
        <HomePage/>
    </main>
  )
}
