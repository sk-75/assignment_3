
import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGODB_URI;

async function handler(req, res) {
  if (req.method === "GET") {
    const id=req.query.id;
    const client = await MongoClient.connect(MONGO_URI);
    const db = client.db();
    const collection = db.collection("books");
    const collection1 = db.collection("authors");
    const collection2 = db.collection("genres");
    const books = await collection.find({}).toArray();
    const authors= await collection1.find({}).toArray();
    const genres = await collection2.find({}).toArray();
    client.close();
    const obj={
                    id,
                    books,
                    authors,
                    genres
                }

    res.status(200).json(obj);
  }
}

export default handler;
