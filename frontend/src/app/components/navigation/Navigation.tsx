import styles from "./Navigation.module.css"
import Link from "next/link"
import Image from 'next/image'


export default function Navigation() {
    return (
        <nav className={styles.topnav}>
            <Link href="/">
                <Image
                    src="/Logo v4 (Tigre).jpg"
                    width={100}
                    height={50}
                    className={styles.logo}
                />
            </Link>
            <li>
                <Link href="/refill">Recharger</Link>
            </li>
            <li>
                <Link href="/login">Connexion</Link>
            </li>
            <li>
                <Link href="/register">Inscription</Link>
            </li>
        </nav>
    )
}