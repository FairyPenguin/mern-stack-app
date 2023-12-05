import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimalCard from './components/AnimalCard/AnimalCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AnimalCard />
    </>
  )
}

export default App
