// import { get_books } from "@/DATA";
// export default function getAllBooks(req,res){
//     if(req.method==="GET")
//     {
//         const books= get_books()
//         res.status(200).json(books)
//     }
// }

import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGODB_URI;

async function handler(req, res) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(MONGO_URI);
    const db = client.db();
    const collection = db.collection("books");
    const books = await collection.find({}).toArray();
    client.close();
    res.status(200).json(books);
  }
}

export default handler;
