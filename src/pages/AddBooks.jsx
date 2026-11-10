import React, { useState } from 'react'
import { addBook } from '../services/apiService'
import { Alert } from 'bootstrap'
import { Link, useNavigate } from 'react-router-dom'



function AddBooks() {


    const Navigate = useNavigate()
    const [bookdetails, SetBookDetails] = useState({
        title: "",
        author: "",
        bookId: "",
        publishedYear: "",
        genre: ""
    })

    const handleChange = (e) => {
        SetBookDetails({ ...bookdetails, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await addBook(bookdetails)
        alert.message("book added")
        console.log(result)
        Navigate('/')
    }

    return (
        <>
            <div className="p-3 bg-info d-flex justify-content-between align-items-center">
                <h1 className="mb-0">Book Manage</h1>
                <Link to="/" className="btn btn-dark">
                    Home
                </Link>
            </div>
            <div className="p-3 text-center ">
                <h1> Add book</h1>
            </div>
            <form onSubmit={handleSubmit} action="">
                <div className="mb-3 flex ">
                    <input
                        type="text"
                        name="title"
                        placeholder="Book Title"
                        className="form-control"
                        value={bookdetails.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 flex ">
                    <input name='author' type="text" placeholder='Author' className='form-control' value={bookdetails.author}
                        onChange={handleChange} />
                </div>
                <div className="mb-3 flex ">
                    <input name='bookId' type="text" placeholder='Book Id' className='form-control' value={bookdetails.bookId}
                        onChange={handleChange} />
                </div>
                <div className="mb-3 flex ">
                    <input name='publishedYear' type="number" placeholder='Published Year' className='form-control' value={bookdetails.publishedYear}
                        onChange={handleChange} />
                </div>
                <div className="mb-3 flex ">
                    <input name='genre' type="text" placeholder='Genre' className='form-control' value={bookdetails.genre}
                        onChange={handleChange} />
                </div>
                <button className='btn btn-success' type='submit'>ADD Book</button>
            </form>
        </>
    )
}

export default AddBooks
