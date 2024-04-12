"use client"
import { useFormState } from "react-dom"
import { Inter } from "next/font/google"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] })

export default function Register() {
  async function register(prevState: any, formData: FormData) {
    const {message} = await checkFormValidity(prevState, formData)
    if (message !== "") {
      return {message: message}
    }
    const firstName = formData.get("Prénom")
    const lastName = formData.get("Nom")
    const age = formData.get("Âge")
    const gender = formData.get("Genre")
    const email = formData.get("Email")
    const password = formData.get("Mot de Passe")
    
    const res = await fetch(`https://92.88.14.43:3000/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        email: email,
        password: password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    console.log(res)
    
    return { message: '' }
  }

  async function checkFormValidity(prevState: any, formData: FormData) {
    const password = formData.get("Mot de Passe")
    const retypePassword = formData.get("Confirmez Mot de Passe")
    if (retypePassword !== password) {
      return { message: "Mot de Passe non identique" }
    }
    return { message: "" }
  }

  const [state, formAction] = useFormState(register, { message: "" })

  return (
    <main className={styles.main}>
      <div className={styles.topnav}>
          <Link href="http://localhost:3000"> <Image src="/Logo v4 (Tigre).jpg"
          width={105}
          height={55}
          className={styles.logo} alt={""} ></Image></Link>  

        <Link href="http://localhost:3000/register"
        >
          <li>
            Identification
          </li>
        </Link>

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

        <Link href="http://localhost:3000/refill"

        >
          <li>
            Rechargez 
          </li>
        </Link>

        <Link
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            Crédits </li>
        </Link>
      </div>
      <div className={inter.className}>
        <form action={formAction}>
          <div className={styles.inputList}>
            <div className={styles.boites}>
            <input type="text" placeholder="Prénom" name="Prénom" className={styles.textInput} required></input>
            <input type="text" placeholder="Nom" name="Nom" className={styles.textInput} required></input>
            <input type="number" placeholder="Âge" name="Âge" className={styles.textInput} required></input>
            <div className={styles.center}>
              </div>
              <select name="Genre" id="Genre" className={styles.textInput}>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
            <div className={styles.boites}>
            <input
              type="Email"
              placeholder="Email"
              name="Email"
              className={styles.textInput}
              required
            ></input>
            <input
              type="Mot de Passe"
              placeholder="Mot de Passe"
              name="Mot de Passe"
              className={styles.textInput}
              required
            ></input>
            <input
              type="Mot de Passe 2"
              placeholder="Confirmez Mot de Passe"
              name="Confirmez Mot de Passe"
              className={styles.textInput}
              required
            ></input>
            <div className={styles.center}>
              <p className={styles.error}>
                {state?.message}
              </p>
            </div>
            <div className={styles.center}>
              <button className={styles.button}>S'inscrire</button>
            </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
