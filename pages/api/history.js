import fs from 'fs'
import path from 'path'

export default function handler(req,res)
{
    const p=path.join(process.cwd(),'History.json')
    const fileData=fs.readFileSync(p)
    const arr=JSON.parse(fileData)
    if(req.method==="POST")
    {
        arr.push(req.body)
        fs.writeFileSync(p,JSON.stringify(arr))
        res.status(200).json("success")
    }
    else{
        res.status(200).json(arr)
    }
}