'use client'
import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";

import { api } from "../lib/axios";

export const AuthContext = createContext({} as AuthContextType)

type AuthContextType = {
    isAuthenticated: boolean,
    signIn: (data: SignInData) => Promise<void>,
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

        if (token) {

        }
    }, [])

    async function signIn({ email, password }: SignInData) {
        const { data } = await api.post('/login',
            { email, password },
        )

        setCookie(undefined, 'koaris.token', data.access_token, {
            maxAge: 60 * 60 * 24, // 1 day
        })

        api.defaults.headers['Authorization'] = `Bearer ${data.access_token}`
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}