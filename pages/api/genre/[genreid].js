import { get_books } from "@/DATA"

export default function filterbygenre(req,res){
    if(req.method==="POST")
    {
        const id=req.body.genreID
        const books=get_books();
        const filteredBooks = books.filter(book => book.genreId === id);
        res.status(200).json(filteredBooks)
    }

}