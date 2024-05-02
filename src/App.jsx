import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Films from './components/Films'
import MovieList from './components/MovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <NavBar/>
   <MovieList/>
    </>
  )
}

export default App;
