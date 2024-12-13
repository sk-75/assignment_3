import { get_authors } from "@/DATA";
import styles from "@/Components/Bookdetail/bookdet.module.css";
import { useEffect, useState } from "react";
export default function AuthorList() {
  const [authors,setauthor]=useState([])
  useEffect(()=>{
      fetch("/api/authors",{
        method:"POST",
        body:null,
        headers:{'Content-Type':'application/json'}
      }).then(res=>res.json()).then(data=>setauthor(data))
    },[])
  return(
    authors.map(obj=>{
      return(
        <div className={styles.bookBox}>
          <h1 className={styles.bookTitle}>{obj.name}</h1>
          <h2 className={styles.bookTitle}>{obj.biography}</h2>
        </div>
      );
    })
  );
}
