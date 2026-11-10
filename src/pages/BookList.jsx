import React, { useEffect, useState } from 'react'
import { deleteBook, getAllBooks } from '../services/apiService'
import { Link } from 'react-router-dom'


function BookList() {

    const [books, setBooks] = useState([])

    const getBook = async () => {

        const result = await getAllBooks()
        setBooks(result.data)
        console.log(result.data);
    }
    const handleDelete = async (id) => {
        const result = await deleteBook(id)
        console.log(result)
        getBook()
    }

    useEffect(() => {
        getBook()
    }, [])



    return (
        <>
            <div className="p-3 bg-info d-flex justify-content-between align-items-center">
                <h1 className="mb-0">Book Manage</h1>
                <Link to="/add" className="btn btn-dark">
                    Add Book
                </Link>
            </div>
            <table className="table table-bordered ">
                <thead className='table-dark'>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Books id</th>
                        <th>Published year</th>
                        <th>Genre</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* dupliacate section */}
                    {
                        books?.map((item) => (
                            <tr key={item.bookId}>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>{item.bookId}</td>
                                <td>{item.publishedYear}</td>
                                <td>{item.genre}</td>
                                <td>
                                    <Link to={`/edit/${item._id}`} className='btn btn-warning'>Edit</Link>
                                    <button onClick={() => handleDelete(item._id)} className='btn btn-danger ms-2'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}

export default BookList
