import { useState, useContext } from "react";
import BookContext from "../books";
import BookEdit from "./BookEdit";

export default function BookShow({ book }) {
    
    const [editBook, setEditBook] = useState(false);
    const { deleteBook } = useContext(BookContext);

    // Delete handle
    const handleClick = ()=> {
        deleteBook(book.id);
    }

    const updateBook = ()=> {
        setEditBook(!editBook)
    }
    // Handle submit
    const onSubmit = () => {
        setEditBook(false)
    }

    // Display editBook
    let content = <h3>{book.title}</h3>
    if(editBook) {
        content = <BookEdit book={book} onSubmit = {onSubmit}/>
    }
    return ( 
    <div className="book-show">
        <img alt="bookPhoto" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={updateBook}>Edit</button>
            <button className="delete" onClick={handleClick}>X</button>
            </div>
    </div>
    )
}