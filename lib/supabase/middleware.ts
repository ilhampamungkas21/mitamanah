import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    // Jika env tidak ada, jangan jalankan Supabase auth di middleware
    if (!supabaseUrl || !supabaseAnonKey) {
        console.warn("[middleware] Missing Supabase env vars. Skipping auth check.")
        return NextResponse.next()
    }

    const supabaseResponse = NextResponse.next()

    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
        cookies: {
            getAll() {
                return request.cookies.getAll()
            },
            setAll(cookiesToSet) {
                // Set cookies pada RESPONSE (bukan request)
                cookiesToSet.forEach(({ name, value, options }) => {
                    supabaseResponse.cookies.set(name, value, options)
                })
            },
        },
    })

    try {
        const {
            data: { user },
        } = await supabase.auth.getUser()

        if (request.nextUrl.pathname.startsWith("/dashboard") && !user) {
            const url = request.nextUrl.clone()
            url.pathname = "/auth/login"
            return NextResponse.redirect(url)
        }
    } catch (error) {
        console.error("[v0] Middleware error:", error)
        // lanjutkan response meskipun gagal auth check
    }

    return supabaseResponse
}
