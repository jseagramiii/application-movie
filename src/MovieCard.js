import React from 'react'

const MovieCard = ({movie}) => {
   
    return (
        <div className='card'>
            {movie.Poster === 'N/A' ? 
            <img style={{ width: '20em' }} src ='https://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png' alt="movie"/> : 
            <img style={{ width: '15em' }} src ={movie.Poster} alt="movie"/> }
            <h2 style={{color: 'white', fontFamily: 'revert'}}>{movie.Title}</h2>
            <h3>{movie.Released}</h3>
            
        </div>
    )
}

export default MovieCard
