import { get_authors, get_books } from "@/DATA";

export default function handler(req,res)
{
    if(req.method==="POST")
    {
        const id=req.body.ID
        
        const authors = get_authors();
        const books = get_books();
        const authorBooks = books.filter((book) => book.authorId === id);
        const authorData = authors.find((author) => author.id === id);
        if (authorBooks.length !== 0) {
            res.status(200).json({
                authorName:authorData.name,
                Books:authorBooks
            })
        }
        else
        {
            res.status(200).json(null)
        }
    }
}