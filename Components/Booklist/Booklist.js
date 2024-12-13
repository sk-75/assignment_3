import { get_books } from "@/DATA";
import Books from "../Books/books";
export default function Booklist(props){
    const arr=get_books();
    return(
        arr.map(obj=>{
            if (obj.featured)
            {
              return <Books t={obj.title} des={obj.description} p={obj.price} g_id={obj.genreId} id={obj.id}/>
            }
        })
    );
}
