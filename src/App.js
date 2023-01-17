import {useEffect, useContext} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BookContext from './books';

export default function App() {

    const { getBooks } = useContext(BookContext);

useEffect(()=>{
    getBooks();
}, [])


    // Displaying
    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    )
}