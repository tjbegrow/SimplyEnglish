import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ResultDisplay from './components/ResultDisplay'

function App() {
  const [count, setCount] = useState(0)
  function search() {
    return null
  }
  return (
    <>
      <Header />
      <div className="top-container">
        <div className="Title">
          <h1>Simply English</h1>
          <p>A distraction free dictionary</p>
        </div>
        <form className="search" action={search}>
          <input name="query"></input>
          <button type="submit">Search</button>
        </form>
      </div>
      <ResultDisplay/>
    </>
  )
}

export default App
