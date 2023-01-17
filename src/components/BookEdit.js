import { useState, useContext } from "react";
import BookContext from "../books";

export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { updateBook } = useContext(BookContext);
  // HandleChange
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  // HandleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    // Close form - onSubmit
    onSubmit();
    // Change form-udateBook
    updateBook(book.id, title);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="book-edit">
        <label>Title:</label>
        <input className="input" onChange={handleChange} value={title} />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}
