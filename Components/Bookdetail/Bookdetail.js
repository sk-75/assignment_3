

import Link from "next/link";

export default function BookDetail({ id, barr, aarr, garr }) {
  const info = barr.find(i => i.id === id);
  const author = aarr.find(i => i.id === id);

  if (!info) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl text-gray-600">Book not found.</p>
      </div>
    );
  }

  const genre = garr.find(i => i.id === info.genreId);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">{info.title}</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">{info.description}</p>
      
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Price</h2>
          <p className="text-3xl font-bold text-primary">${info.price}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Rating</h2>
          <p className="text-3xl font-bold text-primary">{info.rating} / 5</p>
        </div>
      </div>
      
      <div className="mb-8  rounded-md">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Genre</h2>
        <p className="text-lg text-gray-600">{genre.name}</p>
      </div>
      
      <div className="border-t border-gray-200 pt-8">
        <Link href={`/books/${id}/author`}>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 hover:text-primary transition-colors">
            Author Information
          </h2>
        </Link>
        <p className="text-xl font-medium mb-2 text-gray-700">{author.name}</p>
        <p className="text-gray-600">{author.biography}</p>
      </div>
    </div>
  );
}

