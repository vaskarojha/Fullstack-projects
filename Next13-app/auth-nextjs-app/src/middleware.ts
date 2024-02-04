import { NextRequest, NextResponse } from "next/server";
import { Jwt } from "jsonwebtoken";
export function middleware(request:NextRequest){
    const path= request.nextUrl.pathname
    const isPublicPath = path==='/login' || path ==="/signup"
    const token = request.cookies.get('token')?.value || ''

    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/profile', request.nextUrl))
    }
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup'
    ]
}