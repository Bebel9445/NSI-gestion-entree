import { useFormState } from 'react-dom'
import styles from './page.module.css'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Register() {

    async function register(formData: FormData){
        'use server'
        const email = formData.get('email')
        const password = formData.get('password')
    }

    async function checkFormValidity(prevState: any, formData: FormData) {
        'use client'
        const password = formData.get('password')
        const retypePassword = formData.get('retypePassword')
        if (retypePassword !== password) {
            return {message: 'Passwords do not match'}
        }
        return {message: ''}
    }

    const [state, formAction] = useFormState(checkFormValidity, {message: ''})

    return (
        <main className={styles.main}>
            <div className={inter.className}>
                <form action={formAction} method="post">
                    <div className={styles.inputList}>
                        <p>{state?.message}</p>
                        <input type="email" placeholder="Your email" name="email" className={styles.textInput} required></input>
                        <input type="password" placeholder="Your password" name="password" className={styles.textInput} required></input>
                        <input type="password" placeholder="Retype your password" name="retypePassword" className={styles.textInput} required></input>
                        <div className={styles.signUpContainer}>
                            <button className={styles.button}>Sign up</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}