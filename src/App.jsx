import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AddBooks from './pages/AddBooks'
import BookList from './pages/BookList'
import EditBook from './pages/EditBook'

function App() {

  return (
    <Routes>
      <Route path='/' element={<BookList />} />
      <Route path='/add' element={<AddBooks />} />
      <Route path='/edit/:id' element={<EditBook />} />
    </Routes>
  )
}

export default App
