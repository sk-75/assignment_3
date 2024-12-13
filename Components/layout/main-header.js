

'use client'

import Link from "next/link"
import { useContext, useState } from "react"
import { useRouter } from "next/router"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Moon, Sun } from 'lucide-react'
import authContext from "@/Context/context"

export default function Header() {
  const router = useRouter()
  const { auth, setAuth, email, setEmail } = useContext(authContext)
  const [mode, setMode] = useState(false)



  async function logout() {
    setAuth(-1)
    await fetch("/api/auth/logout", { method: "GET" }).then(res => res.json());
    router.push("/")
  }

  return (
    router.pathname !== '/' &&(
        <header className="bg-background border-b">
        <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between h-16">
            <Link href="/books" className="text-xl font-bold text-foreground">
                BookStore
            </Link>
            
            <ul className="flex items-center space-x-4">
                <li>
                <Button variant="ghost" asChild>
                    <Link href="/books">Books</Link>
                </Button>
                </li>
                <li>
                <Button variant="ghost" asChild>
                    <Link href="/history">History</Link>
                </Button>
                </li>
                <li>
                <Button variant="outline" onClick={logout}>
                    Logout
                </Button>
                </li>
                <h1 className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full truncate max-w-[200px]">
                   {email}
                </h1>
                
            </ul>
            
            </nav>
        </div>
        </header>
    )
  );
}

