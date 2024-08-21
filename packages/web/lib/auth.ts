"use server"
import { api } from './api'
import { cookies } from 'next/headers'

type signInData = {
  email: string;
  password: string;
}

type signUpData = {
  name: string;
  email: string;
  role: string;
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

export async function signUp(data: signUpData) {
  try {
    const { name, email, role, password } = data;

    const response = await api.post('/register',
      { name, email, role, password },
    )
    const { access_token } = response.data
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000)
    
    cookies().set('koaris.token', access_token, { expires, httpOnly: false })

    return "/dashboard"
  } catch (error: any) {
    console.log(error)
    return "/register/confirmation"
  }
}