// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from "./layouts/DefaultLayout"
import FilmDetailPage from "./pages/FilmDetailPage"
import FilmsListPage from './pages/FilmsListPage'
import Homepage from './pages/Homepage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/films/" element={<FilmsListPage />}></Route>
          <Route path="/films/:id" element={<FilmDetailPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
