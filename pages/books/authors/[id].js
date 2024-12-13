import { get_authors, get_books } from "@/DATA";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AuthorBooks() {
    const r = useRouter();
    const id = r.query.id;
    const [Data,setData]=useState(null);
    useEffect(()=>{
        fetch('/api/author/'+id,{
            method:"POST",
            body:JSON.stringify({
                ID:id
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>res.json()).then(data=>setData(data))
    },[id])

    if (Data!==null) {
        console.log(Data)
        return (
            <div>
                <h1>{Data.authorName}</h1>
                {
                    Data.Books.map(obj=><h3>{obj.title}</h3>)
                }
            </div>
        );
    }
    else{
        return (
            <div>
                <h1>No books found for this author</h1>
            </div>
        );
    }
}
