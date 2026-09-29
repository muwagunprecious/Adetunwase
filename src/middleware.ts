import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    // console.log("MIDDLEWARE HIT:", req.headers.get("host"));
    const host = req.headers.get("host") || "";
    const url = req.nextUrl.clone();

    // Normalize host (remove port)
    const hostname = host.split(":")[0];

    const isRegistrationDomain = [
        "gwr.adetunwase.com",
        "gwr.localhost",
    ].includes(hostname);

    // If on registration domain (or localhost), force /waitlist
    if (isRegistrationDomain) {
        url.pathname = "/gwr";
        return NextResponse.rewrite(url);
    }

    // Block access to /gwr from main domain
    if (!isRegistrationDomain && url.pathname.startsWith("/gwr")) {
        url.pathname = "/";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|favicon.ico).*)"],
};
