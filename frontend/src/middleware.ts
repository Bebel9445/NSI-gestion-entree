import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "./app/auth/auth";

const cannotBeAuthenticated = ['login', 'signup']
export default async function middleware(req: NextRequest) {
    const isAuth = await isAuthenticated()
    const route = req.nextUrl.pathname
    const parentRoute = route.match("/(.*)")?.[0].split('/')[1]
    if (!parentRoute) {
        return NextResponse.next()
    }
    
    if(cannotBeAuthenticated.includes(parentRoute) && isAuth) {
        return Response.redirect(new URL('/', req.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png|jpg|ico$).*)'],
}