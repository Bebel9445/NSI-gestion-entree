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
            <div className={styles.textevdeux}>
                
                <h1> Qui sommes-nous ? </h1>
                <pre>   </pre>
                <pre>   </pre>
                    <p> Nous sommes une association sportive, affiliée sports pour tous Grand Est.</p>
                    <p> Nous avons des cours réguliers de zumba, strong by zumba, gymdouce, hiit, parcours training, fitboxe, stretching et relaxation.</p>
                    <p> Nous faisons également des évènements caritatifs en fitness et des interventions et remplacement en salle de fitness.</p>         
            </div>

        </main>
    )}
