
'use client'

import { useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { get_genres } from "@/DATA"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const genres = get_genres()

export default function Booksearch() {
        const genretype = useRef();
        const router = useRouter();
    
        const searchbook = (type) => {
            const hist="books-filtered-"+type
            fetch("/api/history",{
                method:"POST",
                body:hist,
                headers:{
                    'Content-Type':'application-json'
                }
            })
            const id = genres.find(i => i.name === type);
            console.log(id)
            if (id) {
                router.push({
                    pathname: '/books/filtered',
                    query: { genreId: id.id },
                });
            }
        };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Book Search</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Link href="/books/genre" className="text-blue-600 hover:underline">
            Genre
          </Link>
          <Select onValueChange={(value) => genretype.current = value}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a genre" />
            </SelectTrigger>
            <SelectContent>
              {genres.map(obj => (
                <SelectItem key={obj.id} value={obj.name}>
                  {obj.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button 
          className="w-full" 
          onClick={() => searchbook(genretype.current)}
        >
          Find Books
        </Button>
      </CardContent>
    </Card>
  )
}

