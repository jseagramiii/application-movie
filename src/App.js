import React, {useState} from 'react'
import './App.css';
import axios from 'axios'
import Movies from './Movies'
import SearchBox from './SearchBox'
import Loading from './Loading'
import Particles from 'react-particles-js'

function App() {
  const apiKey = process.env.REACT_APP_API_KEY
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  
// axios request movies in OMDB database
  const searchMovies = async (text) => {
    setLoading(true)

    let res = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${text}`)

    setMovies(res.data.Search)
    setLoading(false)
  }

  const particlesOptions = {
    'particles': {
       'number': {
           'value': 250
       },
       'size': {
           'value': 0.3
           }
       }
   }
  

  return (
    <div className='app'>
      <Particles params={particlesOptions} className='particles' />
      <h1 className='header'>OMDB Movies</h1>
      <SearchBox searchMovies={searchMovies} loading={loading} />
      <Movies movies={movies} showModal={showModal} showDetails={showDetails} />
    </div>
  );
}

export default App;
