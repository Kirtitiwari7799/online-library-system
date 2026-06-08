import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();

  const books = useSelector(
    (state) => state.books.books
  );

  const book = books.find(
    (book) => book.id === Number(id)
  );

  if (!book) {
    return <h2>Book Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{book.title}</h1>

      <p>
        <strong>Author:</strong> {book.author}
      </p>

      <p>
        <strong>Category:</strong>{" "}
        {book.category}
      </p>

      <p>
        <strong>Description:</strong>{" "}
        {book.description}
      </p>

      <p>
        <strong>Rating:</strong>{" "}
        {book.rating}
      </p>

      <Link to={`/books/${book.category}`}>
        Back to Browse
      </Link>
    </div>
  );
}

export default BookDetails;