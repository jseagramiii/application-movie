import React from 'react'
import MovieCard from './MovieCard'

const Movies = ({movies, showModal, showDetails}) => {
    console.log(movies)
    return (
        <div className='grid'>
            {movies.map((movie) => {
               return <MovieCard movie={movie} key={movie.imdbID} showDetails={showDetails} showModal={showModal} />
            })}
        </div>
    )
}

export default Movies
