import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>

      <Link to={`/book/${book.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default BookCard;