import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.topnav}>
        <Image
          src="/Logo v4 (Tigre).jpg"
          width={105}
          height={55}
          className={styles.logo} alt={""} />
        <li>
          Recharger
        </li>
        <li>
          Connexion
        </li>
        <li>
          <Link href="/register">Inscription</Link>
        </li>
      </nav>

        <section className={styles.section}>
        </section>

        <section className={styles.section}>
          <hr style={{ color: "black", width: "100vw" }} />
        </section>

        <Link href="http://localhost:3000/refill">
          <li>
            Rechargez
          </li>
        </Link>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <li>
          Crédits </li>
      </a>
      <Link
          href="http://localhost:3000/information"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            Qui sommes-nous ? 
          </li>
        </Link>
      <p>Issoupe Inc.©</p>
      <footer className={styles.footer}>
        <div className={styles.one}>
          <div className={styles.vl}>
            <ul className={styles.footerList}>
              <li><a href="mailto:christinafit@orange.fr">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.two}>
          <div className={styles.vl}></div>
        </div>
        <div className={styles.copyright}>
          <p>Issoupe Inc.©</p>
        </div>
      </footer>
    </main>
  );
}
