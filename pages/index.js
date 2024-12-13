
'use client'

import { useContext, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import authContext from '@/Context/context'

export default function Home() {
  const [email1, setEmail1] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)
  const { auth, setAuth, email, setEmail } = useContext(authContext)
  const router = useRouter()

  const handleLogin = async () => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email1, password }),
    })
    const data = await response.json()
    setAuth(data)
    if (data === 1) {
      setEmail(email1)
      router.push("/books")
    }
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email1" className="text-sm font-medium text-gray-700">Email Address</label>
              <Input
                type="email"
                id="email1"
                name="email1"
                placeholder="email"
                value={email1}
                onChange={(e) => setEmail1(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <Input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {passwordVisible ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
            {auth === 0 && (
              <p className="text-red-500 text-sm font-semibold text-center">Incorrect password</p>
            )}
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </CardContent>
          <CardFooter className="flex justify-between text-sm text-gray-600">
            <Link href="/" className="hover:underline">Sign up</Link>
            <Link href="/" className="hover:underline">Forgot Password?</Link>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

