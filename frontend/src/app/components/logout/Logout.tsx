'use client'
import { deleteSession } from "@/app/auth/session"
import { useRouter } from "next/navigation"

export default function LogoutButton() {
    const router = useRouter()
    
    function logout() {
        deleteSession()
        router.replace('/')
    }

    return (
        <li>
            <button onClick={logout}>Se déconnecter</button>
        </li>
    )
}