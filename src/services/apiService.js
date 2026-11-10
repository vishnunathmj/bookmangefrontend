import axiosService from "../api/axiosService";

// get all books
export const getAllBooks = async (books) => {
    return await axiosService("GET", "/books", {})
}

// add new book
export const addBook = async (reqBody) => {
    return await axiosService("POST", "/books", reqBody)
}

// delete book
export const deleteBook = async (id) => {
    return await axiosService("DELETE", `/books/${id}`, {})
}

// single book
export const getSingleBook = async (id) => {
    return await axiosService("GET", `/books/${id}`, {})
}

// edit book
export const updateBook = async (id, reqBody) => {
    return await axiosService("PUT", `/edit-books/${id}`, reqBody)
}