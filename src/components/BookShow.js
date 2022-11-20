import React, {  useState } from "react";
import BookEdit from "./BookEdit";


const BookShow = ({book , onDelete , onEdit})=>{

    const [showEdit , setShowEdit] = useState(false);

    const handleClick = ()=>{
        onDelete(book.id);
    };

    const handleEditClick = ()=>{
        setShowEdit(!showEdit);
    };

    const handleSubmit = ()=>{
        setShowEdit(false);
    };

    let content = <h3>{book.title}</h3>;
    if(showEdit){
        content = <BookEdit book={book} onEdit={onEdit} onSubmit={handleSubmit}/>
    }

    return(
        <>
        <div className="book-show">
            <img src={`https://source.unsplash.com/300x200/?${book.title}`} alt="books" />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleClick}>Delete</button>
            </div>
        </div>
        </>
    );
};

export default BookShow;