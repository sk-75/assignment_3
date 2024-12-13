const Data={
    "books": [
      {
        "id": "1",
        "title": "The Great Gatsby",
        "authorId": "1",
        "description": "A novel about the American dream and the disillusionment that comes with it.",
        "price": 10.99,
        "genreId": "1",
        "rating": 4.4,
        "featured":true
      },
      {
        "id": "2",
        "title": "To Kill a Mockingbird",
        "authorId": "2",
        "description": "A novel set in the Deep South and focused on themes of racial injustice and moral growth.",
        "price": 12.99,
        "genreId": "1",
        "rating": 4.8,
        "featured":false
      },
      {
        "id": "3",
        "title": "1984",
        "authorId": "3",
        "description": "A dystopian novel that explores the dangers of totalitarianism and extreme political ideology.",
        "price": 14.99,
        "genreId": "2",
        "rating": 4.7,
        "featured":true
      },
      {
        "id": "4",
        "title": "Pride and Prejudice",
        "authorId": "4",
        "description": "A romantic novel that charts the emotional development of the protagonist, Elizabeth Bennet.",
        "price": 9.99,
        "genreId": "3",
        "rating": 4.6,
        "featured":false
      },
      {
        "id": "5",
        "title": "The Catcher in the Rye",
        "authorId": "5",
        "description": "A story about teenage rebellion and alienation narrated by the protagonist Holden Caulfield.",
        "price": 11.99,
        "genreId": "1",
        "rating": 4.0,
        "featured":false
      },
      {
        "id": "6",
        "title": "The Alchemist",
        "authorId": "6",
        "description": "A philosophical book that tells the story of Santiago, a shepherd boy on a journey to discover his personal legend.",
        "price": 13.99,
        "genreId": "4",
        "rating": 4.5,
        "featured":true
      },
    ],
    "genres": [
      { "id": "1", "name": "Fiction" },
      { "id": "2", "name": "Dystopian" },
      { "id": "3", "name": "Romance" },
      { "id": "4", "name": "Adventure" }
    ],
    "authors": [
      { "id": "1", "name": "F. Scott Fitzgerald", "biography": "An American novelist and short story writer." },
      { "id": "2", "name": "Harper Lee", "biography": "An American novelist known for 'To Kill a Mockingbird'." },
      { "id": "3", "name": "George Orwell", "biography": "An English novelist and essayist." },
      { "id": "4", "name": "Jane Austen", "biography": "An English novelist known for her social commentary." },
      { "id": "5", "name": "J.D. Salinger", "biography": "An American writer known for 'The Catcher in the Rye'." },
      { "id": "6", "name": "Paulo Coelho", "biography": "A Brazilian lyricist and novelist." }
    ],
    "reviews": [
      { "id": "1", "bookId": "1", "userId": "101", "rating": 5, "comment": "A timeless classic!" },
      { "id": "2", "bookId": "2", "userId": "102", "rating": 4, "comment": "A powerful story." },
      { "id": "3", "bookId": "3", "userId": "103", "rating": 5, "comment": "Chilling and thought-provoking." },
      { "id": "4", "bookId": "4", "userId": "104", "rating": 4, "comment": "A beautifully written love story." }
    ],
    "users": [
      { "id": "101", "password": "1234", "email": "t@gmail.com" },
      { "id": "102", "password": "1111", "email": "a@gmail.com" },
      {"id": "103", "password": "1234", "email": "s@gmail.com" }
    ]
}
export function get_books(){
  return Data.books
}
export function get_genres(){
  return Data.genres
} 
export function get_authors(){
  return Data.authors
}   
export function get_review(){
  return Data.reviews
}
export function get_user(){
  return Data.users
}  