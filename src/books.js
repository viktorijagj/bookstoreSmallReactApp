import { createContext, useCallback, useState } from "react";
import axios from "axios";


const BookContext = createContext();
function Provider({ children }) {
  // creating state
  const [books, setBooks] = useState([]);

  // get all the books when the app starts
  const getBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  },[]);

  // Create a Book
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };
  // Delete a Book
  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  // Update handle

  // Modifying a Book
  const updateBook = async (id, newTitel) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitel,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          ...response.data,
        };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
// What to share with the others components
const valuesToShare = {
    books,
    createBook,
    deleteBook,
    updateBook,
    getBooks
}

  return <BookContext.Provider value={valuesToShare}>{children}</BookContext.Provider>;
}
export {Provider};
export default BookContext;
