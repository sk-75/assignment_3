import { get_books, get_genres } from "@/DATA";
import styles from './genre.module.css';

export default function Genre(props) {
    
    return (
        // <div className={styles.genreBox}>
        //     <p className={styles.genreTitle}>Genre is {props.g.name}</p>
        // </div>
        <div className="group relative overflow-hidden bg-white dark:bg-gray-900 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
                <div className="relative z-10 p-6">
                    <p className="text-gray-800 dark:text-gray-200 font-light text-sm uppercase tracking-wider mb-2">Genre</p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{props.g.name}</h3>
                    <div className="mt-4 w-8 h-0.5 bg-blue-500 group-hover:w-16 transition-all duration-300 ease-in-out"></div>
                </div>
       </div>
    );
}

export async function getServerSideProps(context){
    const bookarr=get_books();
    const genrearr=get_genres();
    const gid=bookarr.find(i=>i.genreId===context.params.genre_id)
    const genre=genrearr.find(i=>i.id===gid.genreId)
    return {
        props:{
            g:genre
        }
    }
}
