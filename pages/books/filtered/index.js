// import { useRouter } from "next/router";
// import { get_books } from "@/DATA";
// import Books from "@/Components/Books/books";
// import { useEffect, useState } from "react";

// export default function FilteredBooks() {
//     const router = useRouter();
//     const { genreId } = router.query; // Get genreId from query parameters

//     const [filteredBooks,setbook]=useState([])
//     useEffect(()=>{
//         fetch("/api/genre/"+genreId,{
//             method:"POST",
//             body:JSON.stringify({
//                 genreID:genreId
//             }),
//             headers:{
//                 'Content-Type':'application/json'
//             }
//         }).then(res=>res.json()).then(data=>{console.log(data);setbook(data)})
//     },[])    

//     return (
//         <div>
//             <h1>Filtered Books</h1>
//             {filteredBooks.length > 0 ? (
//                 filteredBooks.map(book => (
//                     <Books key={book.id} t={book.title} des={book.description} p={book.price} g_id={book.genreId} id={book.id} />
//                 ))
//             ) : (
//                 <p>No books found for this genre.</p>
//             )}
//         </div>
//     );
// }

'use client'

import { useRouter } from "next/router";
import Books from "@/Components/Books/books";
import { useEffect, useState } from "react";

export default function FilteredBooks() {
    const router = useRouter();
    const { genreId } = router.query; // Get genreId from query parameters

    const [filteredBooks, setBooks] = useState([]);

    useEffect(() => {
        fetch("/api/genre/" + genreId, {
            method: "POST",
            body: JSON.stringify({
                genreID: genreId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            console.log(data);
            setBooks(data);
        });
    }, [genreId]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Filtered Books</h1>
            {filteredBooks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBooks.map(book => (
                        <Books 
                            key={book.id} 
                            t={book.title} 
                            des={book.description} 
                            p={book.price} 
                            g_id={book.genreId} 
                            id={book.id} 
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600 text-lg">No books found for this genre.</p>
            )}
        </div>
    );
}

