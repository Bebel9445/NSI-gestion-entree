import { cache } from "react"
import { verifySession } from "../auth/dal"
import { cookies } from "next/headers"

export const getAccount = cache(async (): Promise<JSON | null> => {
    const session = await verifySession()
    if (!session.isAuth) {
        return null
    }

    const accessToken = cookies().get('session')?.value

    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'
    const res = await fetch("https://192.168.1.81:3000/account", {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        }
    })

    return res.json()
})

export default async function AccountInfo() {
    const account = await getAccount()

    if (!account) {
        return <div></div>
    }
    const entries = Array.from(Object.entries(account))

    return (
        <div>
            <ul>
                {entries.map(([key, value]) => (
                    <li key={key}>{value}</li>
                ))}
            </ul>
        </div>
    )
}