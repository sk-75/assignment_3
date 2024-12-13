import { useRouter } from "next/router";

export default function Extra()
{
    const r=useRouter();
    const support=r.query.slug
    return(
        <p>{support}</p>
    )
}