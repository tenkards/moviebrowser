import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import { Route, Routes } from 'react-router-dom';
import MovieView from './components/MovieView';
import SearchView from './components/SearchView';
import NotFound from './components/NotFound';





function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
  if(searchText) {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=ee48449b7f369f9437d6b87ffc8425e4`)
    .then(response => response.json())
    .then(data => {
      setSearchResults(data.results)
    })
  }
  }, [searchText])




  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route exact path="/" element= {<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
