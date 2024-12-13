import { get_authors } from "@/DATA";
import { useRouter } from "next/router";
import styles from './author.module.css';
import { useContext } from "react";
import authContext from "@/Context/context";


export default function Author() {
    const r = useRouter();
    const { auth, setAuth } = useContext(authContext);
    // if(auth!==1)
    // { 
    //     r.push("/")
    // }
    
    const authors = get_authors();
    const a = authors.find(i => i.id === r.query.id);

    if (!a) {
        return <h1 className={styles.notFound}>No author found</h1>;
    } else {
        return (
            <div className={styles.authorBox}>
                <h1 className={styles.authorName}>{a.name}</h1>
                <p className={styles.authorBiography}>{a.biography}</p>
            </div>
        );
    }
}

// //client side redering using useSWR

// const fetcher = () => get_authors(); 
// export default function Author() {
//     const r = useRouter();
//     const { data: authors, error } = useSWR('DATA', fetcher); // Using a string key for SWR

//     // Handle loading state
//     if (!authors) return <h1>Loading...</h1>;

//     // Handle error state
//     if (error) return <h1>Failed to load authors</h1>;

//     // Find the author based on the router query
//     const a = authors.find(i => i.id === r.query.id);

//     // If author not found
//     if (!a) {
//         return <h1 className={styles.notFound}>No author found</h1>;
//     } else {
//         return (
//             <div className={styles.authorBox}>
//                 <h1 className={styles.authorName}>{a.name}</h1>
//                 <p className={styles.authorBiography}>{a.biography}</p>
//             </div>
//         );
//     }
// }
