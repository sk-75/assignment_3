import { get_authors } from "@/DATA";

export default function handler(req, res) {
    if(req.method==="POST"){
        const authors=get_authors();
        res.status(200).json(authors)
    }
}
