import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !title ||
      !author ||
      !category ||
      !description
    ) {
      alert("Please fill all fields");
      return;
    }

    dispatch(
      addBook({
        id: Date.now(),
        title,
        author,
        category,
        description,
        rating: 5,
      })
    );

    navigate(`/books/${category}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add New Book</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) =>
            setAuthor(e.target.value)
          }
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        />
        <br />
        <br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />
        <br />
        <br />

        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;