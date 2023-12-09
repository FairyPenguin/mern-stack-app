import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import './App.css'
import AnimalCard from './components/AnimalCard/AnimalCard'
import NewBook from "./pages/AddNewBook/NewBook"

function App() {
  const [count, setCount] = useState(0)

  return (


    <>
      <a href="http://"></a>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/add-new-book" element={<NewBook />} />
            <Route path="/" element={<AnimalCard />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
