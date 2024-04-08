import Image from "next/image";
import styles from "./page.module.css";
import Link from "../../node_modules/next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.topnav}>
        <Image
          src="/Logo v4 (Tigre).jpg"
          width={100}
          height={50}
          className={styles.logo}
        />
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
        <hr style={{color: "black", width: "100vw"}}/>
      </section>

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
