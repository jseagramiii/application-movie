import React from 'react'
import MovieCard from './MovieCard'

const Movies = ({movies}) => {
    console.log(movies)
    return (
        <div className='grid'>
            {movies.map((movie) => {
               return <MovieCard movie={movie}  />
            })}
        </div>
    )
}

export default Movies
