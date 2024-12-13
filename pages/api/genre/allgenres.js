import { get_genres } from "@/DATA";

import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGODB_URI;

async function handler(req,res){
    if(req.method==="GET"){
        const client = await MongoClient.connect(MONGO_URI);
        const db = client.db();
        const collection2 = db.collection("genres");
        const genre = await collection2.find({}).toArray();
        client.close();
        res.status(200).json(genre)
    }
}

export default handler;


