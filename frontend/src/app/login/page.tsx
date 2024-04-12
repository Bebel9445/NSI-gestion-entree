import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";

import styles from './page.module.css'

export default function Login(){
    return (
        <main>
            <Navigation/>
            <section className={styles.container}>
                <div className={styles.center}>
                    <div className={styles.loginForm}>
                        <form action="" className={styles.form}>
                            <input type="email" placeholder="Your email"></input>
                            <input type="password" placeholder="Your password"></input>
                            <button>Sign in</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}