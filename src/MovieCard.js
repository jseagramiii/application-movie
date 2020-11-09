import React, {useState} from 'react'
import { Button } from 'antd'
import Modal from './Modal'

const MovieCard = ({movie, showModal, showDetails}) => {

    return (
    <div className='card grow'>

        {movie.Poster === 'N/A' ? 
        <img style={{ width: '13em' }} src ='https://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png' alt="movie"/> : 
        <img style={{ width: '13em' }} src ={movie.Poster} alt="movie"/> }

        <h2 style={{color: 'white', fontFamily: 'revert'}}><em>{movie.Title}</em></h2>
        <h4>{movie.Year}</h4>
        <Button danger className='type'>{movie.Type}</Button>
        <Modal movie={movie} />
    </div>
    )
}


export default MovieCard
