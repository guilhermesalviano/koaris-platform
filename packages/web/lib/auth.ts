"use server"
import { api } from './api'
import { cookies } from 'next/headers'

type signInData = {
  email: string;
  password: string;
}

export async function signIn(data: signInData) {
  try {
    const { email, password } = data;

    const response = await api.post('/login',
      { email, password },
    )
    const { access_token } = response.data
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000)
    
    cookies().set('koaris.token', access_token, { expires, httpOnly: false })

    return "/dashboard"
  } catch (error: any) {
    console.log(error)
    return "/login"
  }
}