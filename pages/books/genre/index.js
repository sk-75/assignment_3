
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AllGenre() {
    const router = useRouter();
    const [genres, setGenre] = useState([]);

    useEffect(() => {
        fetch('/api/genre/allgenres', { method: "GET" })
            .then(res => res.json())
            .then(data => setGenre(data))
    }, []);

    function filter(id) {
        if (id) {
            router.push({
                pathname: '/books/filtered',
                query: { genreId: id },
            });
        } else {
            router.push('/404');
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">All Genres</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {genres.map(obj => (
                    <button
                        key={obj.id}
                        className="bg-white hover:bg-primary hover:text-white text-gray-800 font-semibold py-4 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                        onClick={() => filter(obj.id)}
                    >
                        <h2 className="text-lg">{obj.name}</h2>
                    </button>
                ))}
            </div>
        </div>
    );
}

