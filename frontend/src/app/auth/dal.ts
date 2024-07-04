import { cookies } from "next/dist/client/components/headers"
import { cache } from "react"
import { jwtVerify } from "jose"

const secret = process.env.JWT_CONSTANT_SECRET
const encodedKey = new TextEncoder().encode(secret)

export const verifySession = async () => {
    const cookie = cookies().get('session')
    if (!cookie) {
        return { isAuth: false }
    }

    const value = cookie.value
    if (!value) {
        return { isAuth: false }
    }
    
    const session = await jwtVerify(value, encodedKey, {
        algorithms: ['HS256']
    })

    if (!session.payload.sub) {
        return { isAuth: false }
    }

    return { isAuth: true, userId: session.payload.sub }
}
