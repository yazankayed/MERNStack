import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [bookTitle, setBookTitle] = useState(""); 
    const [bookPrice, setBookPrice] = useState("");
    const [bookDescription, setBookDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            bookTitle,
            bookPrice,
            bookDescription
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setBookTitle(e.target.value)} value={bookTitle}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setBookPrice(e.target.value)} value={bookPrice}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setBookDescription(e.target.value)} value={bookDescription}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

