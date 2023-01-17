import BookShow from "./BookShow";
import { useContext } from "react";
import BookContext from "../books";


export default function BookList() {

    //Context reach
    const { books } = useContext(BookContext);

    return (
        <div className="book-list" style={{display: "flex", flexDirection:"row", flexWrap:"wrap"}}>
            
            {books&&books.map((book)=> {
        return (
        <BookShow key={book.id} book={book} />
    )
})}
        </div>
    )
}