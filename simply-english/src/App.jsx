import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ResultDisplay from './components/ResultDisplay'

function App() {
  //Use this for the session search history
  const [search, setSearch] = useState("");
  //const [recentSearches, setRecentSearches] = useState([]);
  const [resultData, setResultData] = useState();

  class Definition {
    constructor(word, phonetic, phonetics, meanings) {
      this.word = word;
      this.phonetic = phonetic;
      this.phonetics = phonetics;
      this.meanings = meanings;
    }
  }

  const handleSearch = async (e) => {
    //This needs Error Handling
    e.preventDefault();
    const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`, {method: 'GET'});
    let data = await result.json();
    console.log(data[0].meanings);
    const def= new Definition(data[0].word, data[0].phonetic, data[0].phonetics, data[0].meanings);
    setResultData(def);
  }

  const renderResultsDisplay = (defResults) => <ResultDisplay defResults={defResults}/>


  return (
    <>
      <Header />
      <div className="top-container">
        <div className="Title">
          <h1>Simply English</h1>
          <p>A distraction free dictionary</p>
        </div>
        <form className="search" onSubmit={handleSearch}>
          <input 
            name="query"
            onChange={e => setSearch(e.target.value)}
            type="text"
          />
          <button 
            type="submit"
          >Search</button>
        </form>
      </div>
      <hr/>
      {renderResultsDisplay(resultData)}
      <footer>
        <h2>Copywrite 2025</h2>
      </footer>
    </>
  )
}

export default App
