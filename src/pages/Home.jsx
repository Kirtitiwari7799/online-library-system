import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Online Library</h1>

<p>
  Discover, browse and manage your favorite books from our digital library.
</p>

      <h2>Book Categories</h2>

      <ul>
        <li>
          <Link to="/books/Fiction">Fiction</Link>
        </li>

        <li>
          <Link to="/books/Non-Fiction">
            Non-Fiction
          </Link>
        </li>

        <li>
          <Link to="/books/Sci-Fi">Sci-Fi</Link>
        </li>

        <li>
          <Link to="/books/Fantasy">Fantasy</Link>
        </li>
      </ul>

      <h2>Popular Books</h2>

<p>
  The Great Gatsby | Atomic Habits | Dune |
  Harry Potter
</p>

<h2>Why Use Our Library?</h2>

<ul>
  <li>Browse books by category</li>
  <li>View detailed book information</li>
  <li>Add new books to the collection</li>
</ul>

</div>
  );
}

export default Home;