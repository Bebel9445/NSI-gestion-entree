'use server'
import { cookies } from "next/headers";

export async function createSession(accessToken: string) {
    cookies().set('session', accessToken, {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        sameSite: 'strict',
        path: '/'
    })
}

export async function deleteSession() {
    cookies().delete('session')
}