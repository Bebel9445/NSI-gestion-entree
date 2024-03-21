import styles from './page.module.css'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Register() {
    return (
        <main className={styles.main}>
            <div className={inter.className}>
                <div className={styles.inputList}>
                    <input type="email" placeholder="Your email" className={styles.textInput}></input>
                    <input type="password" placeholder="Your password" className={styles.textInput}></input>
                    <input type="password" placeholder="Retype your password" className={styles.textInput}></input>
                    <div className={styles.signUpContainer}>
                        <button className={styles.button}>Sign up</button>
                    </div>
                </div>
            </div>
        </main>
    )
}