"use client"
import { useFormState } from "react-dom"
import styles from "./page.module.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Register() {
  async function register(prevState: any, formData: FormData) {
    const {message} = await checkFormValidity(prevState, formData)
    if (message !== "") {
      return {message: message}
    }
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const age = formData.get("age")
    const gender = formData.get("gender")
    const email = formData.get("email")
    const password = formData.get("password")
    
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
    const password = formData.get("password")
    const retypePassword = formData.get("retypePassword")
    if (retypePassword !== password) {
      return { message: "Passwords do not match" }
    }
    return { message: "" }
  }

  const [state, formAction] = useFormState(register, { message: "" })

  return (
    <main className={styles.main}>
      <div className={inter.className}>
        <form action={formAction}>
          <div className={styles.inputList}>
            <input type="text" placeholder="First Name" name="firstName" className={styles.textInput} required></input>
            <input type="text" placeholder="Last Name" name="lastName" className={styles.textInput} required></input>
            <input type="number" placeholder="Age" name="age" className={styles.textInput} required></input>
            <input type="text" placeholder="Gender" name="gender" className={styles.textInput} required></input>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              className={styles.textInput}
              required
            ></input>
            <input
              type="password"
              placeholder="Your password"
              name="password"
              className={styles.textInput}
              required
            ></input>
            <input
              type="password"
              placeholder="Retype your password"
              name="retypePassword"
              className={styles.textInput}
              required
            ></input>
            <div className={styles.center}>
              <p className={styles.error}>
                {state?.message}
              </p>
            </div>
            <div className={styles.center}>
              <button className={styles.button}>Sign up</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
