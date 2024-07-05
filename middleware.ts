import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const requestHeaders = new Headers(req.headers)

    requestHeaders.set('x-hello-from-middleware', 'hello world')
    const referrer = requestHeaders.get('referer')
    console.log('referer', referrer)
    console.log(requestHeaders)
}