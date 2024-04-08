import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topnav}>
        <Image
          src="/Logo v4 (Tigre).jpg"
          width={100}
          height={50}
          className={styles.logo} alt={""}        />
        <Link href="http://localhost:3000/register"
        >
          <li>
            Identification
          </li>
        </Link>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            Qui sommes-nous ? 
          </li>
        </a>

        <a
          href="http://localhost:3000/refill"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            Rechargez 
          </li>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            Crédits </li>
        </a>
      </div>
    <p>Issoupe Inc.©</p>
    </main>
  );
}
