import React, { createContext, useContext, useState } from "react"; 
import useLocalStorage from '../hooks/useLocalStorage';
import { nanoid } from 'nanoid';

const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [books, setbooks] = useLocalStorage('mybooks', []);
    const [filter, setFilter] = useState('semua');
    
    const addbook = (newbook) => {
        const bookwithid = {...newbook, id: nanoid()}; 
        setbooks((prevbooks) => [...prevbooks, bookwithid])
    };
    
    const editbook = (updatedbook) => {
        setbooks((prevbooks) =>
        prevbooks.map((book) => (book.id === updatedbook.id ? updatedbook : book))
        );
    };
    
    const deletebook = (id) => {
        setbooks((prevbooks) => prevbooks.filter((book) => book.id !== id));
    };

   
    const filteredBooks = books.filter(book => {
        if (filter === 'semua') {
            return true;
        }
        return book.status === filter;
    });
    
    const contextvalue = {
        books,
        filteredBooks, // <--- Gunakan ini di BookList
        addbook,
        editbook,
        deletebook,
        filter, // <--- Tambahkan filter
        setFilter, // <--- Tambahkan setFilter
    };
    
    return (
    <BookContext.Provider value={contextvalue}>
      {children}
    </BookContext.Provider>
  );
};

const useBooks = () => {
  return useContext(BookContext);
};

export { BookProvider, useBooks };