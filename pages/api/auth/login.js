import { get_user } from "@/DATA";

export default function handler(req,res)
{
    if (req.method==="POST")
    {
        const user=get_user();
        const check=user.find(obj=>obj.email===req.body.email1 && obj.password===req.body.password)
        if(check){
            res.status(200).json(1)
        }
        else{
            res.status(200).json(0)
        }
    }
}