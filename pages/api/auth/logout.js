export default function Logout(req,res){
    if(req.method==="GET")
    {
        res.status(200).json(-1)
    }
}