'use server'

import { redirect } from "next/navigation"
import { createSession } from "../auth/session"

export default async function login(prevState: any, formData: FormData) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'
    const email = formData.get("email")
    const password = formData.get("password")

    const apiUrl = process.env.API_URL || ""
    const url = `${apiUrl}/auth/login`
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "d05cbcd8c5080212e6f1f54a989492be300b82110f08c40eac8ccb54f0654669"
        }
    })

    const body = await res.json()
    const accessToken = body['access_token']
    
    createSession(accessToken)

    if (res.status === 200) {
        redirect('/')
    }
    return {message: ""}
}