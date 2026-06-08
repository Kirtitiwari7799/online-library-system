import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#333" }}>
      <Link
        to="/"
        style={{ color: "white", marginRight: "15px" }}
      >
        Home
      </Link>

      <Link
        to="/books/Fiction"
        style={{ color: "white", marginRight: "15px" }}
      >
        Browse Books
      </Link>

      <Link
        to="/add-book"
        style={{ color: "white" }}
      >
        Add Book
      </Link>
    </nav>
  );
}

export default Navbar;