import React, { useState } from "react";
import BookCreate from './BookCreate';
import BookList from './BookList';


const App = ()=>{

    const [books , setBooks] = useState([]);

    const createBook = (title)=> {

        const upadateBooks = [...books , {id: Math.round(Math.random() * 999) , title: title}]
        setBooks(upadateBooks);
    };

    const editBookById = (id , newTitle)=> {
        const upadateBooks  = books.map((book)=>{
            if(book.id === id){
                return {...book , title : newTitle};
            };
            return book;
        });

        setBooks(upadateBooks);
    };


    const deleteBookByid = (id)=>{
        const upadatedBooks = books.filter((book)=>{
            return book.id !== id ;
        });
        setBooks(upadatedBooks);
    };

    return (
        <>
        <div className="app">
            <h1>Reading List</h1>
            <BookList
            onEdit = {editBookById}
            books={books} 
            onDelete={deleteBookByid}
            />
            <BookCreate onCreate={createBook}/>
        </div>
        </>
    );
};

export default App;