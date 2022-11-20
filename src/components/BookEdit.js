import React, { useState } from "react";


const BookEdit = ({book ,onEdit ,onSubmit})=>{
    const [title , setTitle] = useState(book.title);

    const handleOnChange = (event)=>{
        setTitle(event.target.value);
    };

    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log('New Title' , title);
        onEdit(book.id ,title);
        onSubmit();
    }

    return(
        <>
        <form  className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" onChange={handleOnChange} value={title} className="input" />
            <button className="button is-primary">
                Save
            </button>
        </form>
        </>
    );
};

export default BookEdit;