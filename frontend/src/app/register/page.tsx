"use client"
import { useFormState, useFormStatus } from "react-dom"
import styles from "./page.module.css";
import Footer from "../components/footer/Footer";
import register from "./register";
import SubmitButton from "../components/submit-button";
import Navigation from "../components/navigation/Navigation";


export default function Register() {

  const preventNegative = (e: any) => {
    if (e.value < 0)
      e.preventDefault()
  }

  const [state, formAction] = useFormState(register, { message: "" })

  return (
    <main className={styles.main}>
      <Navigation />
      <section className={styles.container}>
        <div className={styles.globalCenter}>
          <form action={formAction}>
            <div className={styles.center}>
              <div className={styles.inputList}>
                <input type="text" placeholder="Prénom" name="firstName" className={styles.textInput} required></input>
                <input type="text" placeholder="Nom" name="lastName" className={styles.textInput} required></input>
                <input type="number" placeholder="Âge" name="age" min="0" className={styles.textInput} onChange={preventNegative} required></input>
                <select name="gender" id="Genre" className={styles.textInput} required>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                  <option value="Autre">Autre</option>
                </select>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className={styles.textInput}
                  required
                ></input>
                <input
                  type="password"
                  placeholder="Mot de Passe"
                  name="password"
                  className={styles.textInput}
                  required
                ></input>
                <input
                  type="password"
                  placeholder="Confirmez Mot de Passe"
                  name="confirmPassword"
                  className={styles.textInput}
                  required
                ></input>
                <div className={styles.center}>
                  <p className={styles.error}>
                    {state?.message}
                  </p>
                </div>
                <div className={styles.center}>
                  <SubmitButton className={styles.button} placeholder="S'inscrire" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  )
}
