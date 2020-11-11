import React from 'react'
import { Button } from 'antd'
import Loading from './Loading'
import axios from 'axios'


const MovieCard = ({movie, setDetails, setShowModal}) => {

    const apiKey = process.env.REACT_APP_API_KEY

    const onClick = async () => {

       let res = await axios.get(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`)
        
       setDetails(res.data)
    }

    return (
    <div className='card grow' onClick={() => onClick()}>

        <img  style={{width: '13em'}} src={movie.Poster === 'N/A' ? 'https://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png' : movie.Poster} alt={movie.Title}/>
        <h2 style={{color: 'white', fontFamily: 'revert'}}><em>{movie.Title}</em></h2>

        <h4 style={{color: 'white'}}>{movie.Year}</h4>

        <Button danger className='type'>{movie.Type}</Button>
        <div style={{color: 'white'}}>
        </div>
            
    </div>
    )
}


export default MovieCard