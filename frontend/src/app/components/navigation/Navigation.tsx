'use client'
import styles from "./Navigation.module.css"
import Image from 'next/image'
import Link from "next/link"
import LogoutButton from "../logout/Logout"
import { useEffect, useState } from "react"
import { isAuthenticated } from "@/app/auth/auth"

export function SignIn() {
    return (<li>
        <Link href='/login'>Connexion</Link>
    </li>)
}

export function SignUp() {
    return (
        <li>
            <Link href='/register'>Inscription</Link>
        </li>
    )
}

export function Logo() {
    return <Link href='/'>
        <Image
            src="/Logo v4 (Tigre).jpg"
            width={100}
            height={50}
            className={styles.logo}
            alt="Logo"
        />
    </Link>
}

export default function Navigation() {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        const verify = async () => {
            isAuthenticated().then((auth) => setIsAuth(auth))
        }
        verify()
    })

    return (
        <nav className={styles.topnav}>
            <Logo/>{
                isAuth ?
                    <><LogoutButton/></> : <><SignIn /> <SignUp /></>
            }
        </nav>
    )
}