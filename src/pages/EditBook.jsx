import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleBook, updateBook } from '../services/apiService'



function EditBook() {

    const { id } = useParams()

    const [bookdetails, SetBookDetails] = useState({
        title: "",
        author: "",
        bookId: "",
        publishedYear: "",
        genre: ""
    })

    const getBookDetails = async () => {
        const result = await getSingleBook(id)
        SetBookDetails(result.data)
    }
    const handleChange = (e) => {
        SetBookDetails({ ...bookdetails, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const result = await updateBook(id, bookdetails)
        console.log(result)
    }
    useEffect(() => {
        getBookDetails()
    }, [])

    return (
        <div>
            <div className="p-3 bg-info d-flex justify-content-between align-items-center">
                <h1 className="mb-0">Book Manage</h1>
                <Link to="/" className="btn btn-dark">
                    Home
                </Link>
            </div>
            <div className="p-3 text-center ">
                <h1> Edit book</h1>
            </div>
            <form onSubmit={handleSubmit} action="">
                <div className="mb-3 flex ">
                    <input onChange={handleChange} type="text" name="title" placeholder="Book Title" className="form-control" value={bookdetails.title} />
                </div>
                <div className="mb-3 flex ">
                    <input onChange={handleChange} name='author' type="text" placeholder='Author' className='form-control' value={bookdetails.author} />
                </div>
                <div className="mb-3 flex ">
                    <input onChange={handleChange} name='bookId' type="text" placeholder='Book Id' className='form-control' value={bookdetails.bookId} />
                </div>
                <div className="mb-3 flex ">
                    <input onChange={handleChange} name='publishedYear' type="number" placeholder='Published Year' className='form-control' value={bookdetails.publishedYear} />
                </div>
                <div className="mb-3 flex ">
                    <input onChange={handleChange} name='genre' type="text" placeholder='Genre' className='form-control' value={bookdetails.genre} />
                </div>
                <button className='btn btn-success' type='submit'>Update</button>
            </form>
        </div>
    )
}

export default EditBook
