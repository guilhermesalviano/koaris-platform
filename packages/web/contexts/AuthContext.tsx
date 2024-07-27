'use client'
import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";

import { api } from "../lib/axios";

export const AuthContext = createContext({} as AuthContextType)

type AuthContextType = {
    isAuthenticated: boolean,
    signIn: (data: SignInData) => Promise<void>,
    signOut: () => void,
}

type SignInData = {
    email: string;
    password: string;
}

type User = {
    name: string;
    email: string;
}

export function AuthProvider({ children }: any) {
    const [ user, setUser ] = useState<User | null>(null)

    const isAuthenticated = false

    useEffect(() => {
        const { 'koaris.token': token } = parseCookies()

        if (token) {}
    }, [])

    async function signIn({ email, password }: SignInData) {
        try {
            const { data } = await api.post('/login',
                { email, password },
            )

            setCookie(undefined, 'koaris.token', data.access_token, {
                maxAge: 60 * 60 * 24, // 1 day
                secure: false,
                httpOnly: false,
                sameSite: 'strict',
            })

            api.defaults.headers['Authorization'] = `Bearer ${data.access_token}`
        } catch (error) {
            console.error('Error during sign in', error);
        }
    }

    function signOut() {
        destroyCookie(undefined, 'koaris.token')
        setUser(null)
        api.defaults.headers['Authorization'] = null
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}