'use client'
import Footer from "../components/footer/Footer";

import styles from './page.module.css'
import SubmitButton from "../components/submit-button";
import { useFormState } from "react-dom";
import login from "./login";
import Navigation from "../components/navigation/Navigation";

export default function Login() {

    const [state, formAction] = useFormState(login, { message: "" })

    return (
        <main className={styles.main}>
            <Navigation />
            <section className={styles.container}>
                <div className={styles.globalCenter}>
                    <div className={styles.loginForm}>
                        <form action={formAction} className={styles.form}>
                            <div className={styles.center}>
                                <div className={styles.inputList}>
                                    <h1 className={styles.center} style={{color: "white"}}>Connexion</h1>
                                    <input type="email" name="email" placeholder="Email" className={styles.textInput}></input>
                                    <input type="password" name="password" placeholder="Mot de passe" className={styles.textInput}></input>
                                    <div className={styles.center}>
                                        <SubmitButton className={styles.button} placeholder="Se connecter" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}