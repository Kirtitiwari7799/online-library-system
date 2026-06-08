import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import BookCard from "../components/BookCard";

function BrowseBooks() {
  const { category } = useParams();

  const books = useSelector(
    (state) => state.books.books
  );

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.category === category &&
      book.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
     <h1>{category} Books</h1>

<p>
  Explore books from this category and find your next favorite read.
</p>

<input
  type="text"

      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      {filteredBooks.map((book) => (
        <BookCard
          key={book.id}
          book={book}
        />
      ))}
    </div>
  );
}

export default BrowseBooks;