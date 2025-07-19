import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import ResultDisplay from './components/ResultDisplay/ResultDisplay'

function App() {
  //Use this for the session search history
  const [search, setSearch] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  //const [recentSearches, setRecentSearches] = useState([]);
  const [resultData, setResultData] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);

  class Definition {
    constructor(word, phonetic, phonetics, meanings) {
      this.word = word;
      this.phonetic = phonetic;
      this.phonetics = phonetics;
      this.meanings = meanings;
    }
  }

  const handleSearch = async (event) => {
    //This needs Error Handling
    try {
      //console.log(search);
      //console.log(event);
      event.preventDefault();
      // if (event.target.lastChild.innerHTML != "Search") {
      //   console.log("Doesn't equal search: : + event.target.lastChild.innerHTML");
      //   setSearch(event.target.lastChild.innerHTML);
      // }
      
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`, {method: 'GET'});
      if (!response.ok) { // Handles HTTP response errors
        //console.log(response);
        throw new Error(response.status);
      }

      let data = await response.json();
      //console.log(data[0].meanings);
      setSearchHistory([...searchHistory, data[0].word]);
      //console.log(`search history: ${searchHistory}`);
      
      const def= new Definition(data[0].word, data[0].phonetic, data[0].phonetics, data[0].meanings);
      setResultData(def);
    } catch (error) {
      if (error == "Error: 404") {
        alert(`${search} not found. Please try again.`) //Maybe this could just be a tool tip?
      }
    }
  }

  const handleSearchChange = (newSearch) => {
        setSearch(newSearch); 
  };

  const renderResultsDisplay = (defResults) => <ResultDisplay defResults={defResults} handleSearch={handleSearch} handleSearchChange={handleSearchChange}/>;


  return (
    <>
      <Header HistoryItems={searchHistory} DarkMode={isDarkMode}/>
      <div className={`top-container ${isDarkMode ? 'darkMode': ""}`}>
        <div className="Title">
          <h1>Simply English</h1>
          <p>A distraction free dictionary</p>
        </div>
        <form id="search" onSubmit={handleSearch}>
          <div id="searchArea">
            <input 
              id="searchBox"
              name="query"
              onChange={e => setSearch(e.target.value)}
              type="text"
            />
            <button 
              type="submit"
            >Search</button>
          </div>
          <hr/>
          {renderResultsDisplay(resultData)}
       </form>
      </div>
      <footer>
        <h2>Copywrite 2025</h2>
      </footer>
    </>
  )
}

export default App
