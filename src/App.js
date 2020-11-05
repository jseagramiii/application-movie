import React, {useState} from 'react'
import './App.css';
import axios from 'axios'
import Movies from './Movies'
import SearchBox from './SearchBox'

function App() {
  const apiKey = process.env.REACT_APP_API_KEY
  const [movies, setMovies] = useState([])
  // const [loading, setLoading] = useState(false)
  
// search movies in OMDB database
  const searchMovies = async (text) => {
    // setLoading(true)

    let res = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${text}`)

    setMovies(res.data.Search)
    // setLoading(false)
  }
  

  return (
    <div>
      <h1 className='header'>OMDB Movies</h1>
      <SearchBox searchMovies={searchMovies} />
      <Movies movies={movies} />
    </div>
  );
}

export default App;
