// import { get_genres } from '@/DATA';
// import styles from './books.module.css';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// export default function Books(props)
// {
//     return(
//         <div className={styles.bookBox}> {/* Using the module style */}
//             <h1 className={styles.bookTitle}>{props.t}</h1>
//             <p className={styles.bookDescription}>{props.des}</p>
//             <p className={styles.bookPrice}>{props.p}</p>
//             <Link className={styles.bookButton} href={`/${props.g_id}`}>View Genre</Link>
//             <Link className={styles.buttonDetail} href={`/books/`+props.id}>View Info</Link>
//         </div>
//     );
// }
'use client'

import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export default function Books(props) {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 truncate">{props.t}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{props.des}</p>
        <p className="text-lg font-semibold text-green-600">{props.p}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href={`/${props.g_id}`}>View Genre</Link>
        </Button>
        <Button asChild>
          <Link href={`/books/${props.id}`}>View Info</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

