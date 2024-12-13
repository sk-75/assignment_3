import Book_detail from "@/Components/Bookdetail/Bookdetail";
import authContext from "@/Context/context";
import { get_books ,get_authors ,get_genres} from "@/DATA";
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from "react";

export default function books(){
    const {auth,setAuth}=useContext(authContext)
    const r=useRouter();
    if(auth===1)
    {
        
        const [specificbook,setbook]=useState(null)
        const [isHistory,setHistory]=useState(false)
        useEffect(()=>{
            fetch('/api/books/'+r.query.id,{method:"GET"}).then(res=>res.json()).then(data=>setbook(data))
        },[])
        const hist="books/"+r.query.id
            useEffect(()=>{
                if(isHistory===false && specificbook){
                fetch('/api/history',{
                    method:"POST",
                    body:hist,
                    headers:{
                        'Content-Type':'application-json'
                    }
                }).then(res=>res.json()).then(setHistory(true))}
            },[specificbook,isHistory])    
        if(specificbook){
            return(
            <Book_detail id={specificbook.id} barr={specificbook.books} aarr={specificbook.authors} garr={specificbook.genres}/>)
        }
        else    
        return(<h1>Not found</h1>)
    }
    else{
        r.push("/")
    }

}
