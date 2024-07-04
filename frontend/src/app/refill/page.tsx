import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function Refill() {
    return (
        <main className={styles.main}>
            <div className={styles.topnav}>
                
                <Link href="http://localhost:3000"> <Image
                    src="/Logo v4 (Tigre).jpg"
                    width={105}
                    height={55}
                    className={styles.logo} alt={""}  ></Image></Link> 
                <Link href="http://localhost:3000/register"
                >
                <li>
                    Identification
                </li>
                </Link>

                <a
                href="http://localhost:3000/information"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
                >
                <li>
                    Qui sommes-nous ? 
                </li>
                </a>

                <Link
                href="http://localhost:3000/refill"
                target="_blank"
                rel="noopener noreferrer"
                >
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
      </div>
            <div className={styles.center}> 
                <h2 className={styles.texte}> Rechargez vos points ici pour continuer à avoir accès à nos servives</h2>
            </div>
            <div className={styles.boite}>
                <button className={styles.styled} type="button">10 points </button>
                <button className={styles.styled} type="button">20 points </button>
                <button className={styles.styled} type="button">50 points </button>
                <br></br>
                <button className={styles.styled} type="button">70 points </button>
                <button className={styles.styled} type="button">100 points </button>
                <button className={styles.styled} type="button">200 points </button>
            </div>
        </main>
    )
}