import React, {useState,} from 'react'
import './App.css';
import Particles from 'react-particles-js'
import axios from 'axios'
import SearchBox from './SearchBox'
import Details from './Details'
import MovieCard from './MovieCard'


function App() {
  const apiKey = process.env.REACT_APP_API_KEY
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [details, setDetails] = useState(false)
  const [modal, setModal] = useState(false)
  
// axios request movies in OMDB database
  const searchMovies = async (text) => {
    setLoading(true)

    let res = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${text}`)

    setMovies(res.data.Search)
    setLoading(false)
  }
  
  const particlesOptions = {
    'particles': {'number': {'value': 250}, 'size': {'value': 0.3}}
   }
  
  return (
    <div className='app'>
      <Particles params={particlesOptions} className='particles' />
      <h1 className='header'>OMDB Movies and Videogames</h1>
      <SearchBox searchMovies={searchMovies} loading={loading} />
      <div className='grid'>
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} setDetails={setDetails} />
          ))} 
      </div>
      <Details style={{display: 'none'}}
      details={details}
      /> 
    </div>
  );
}


export default App;