import Books from "@/Components/Books/books";
import Booksearch from "@/Components/Books/booksearch";
import { get_books, get_genres } from "@/DATA";
import { notFound } from "next/navigation";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";


export default function Genre()
{
   const [data,setData] =useState([])
   useEffect(()=>{fetch('/api/books/getAllBooks',{method:"GET"}).then(res=>res.json()).then(d1=>setData(d1))},[])
   if(data.length===0)
   {
    return <h1>Loading</h1>
   }
   else{
    
   return(
    <div>
    <Booksearch/>
    <h1 className="text-2xl font-bold text-center">ALL BOOKS</h1>
    {
       data.map(obj=>{
            return <Books t={obj.title} des={obj.description} p={obj.price} g_id={obj.genreId} id={obj.id}/>
        })
    }
    </div>
    );
    }
}
