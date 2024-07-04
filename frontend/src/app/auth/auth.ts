'use server'

import { verifySession } from "./dal"

export async function isAuthenticated () {
    const session = await verifySession()
    return session.isAuth
}