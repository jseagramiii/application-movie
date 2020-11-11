import React from 'react'
import {Button} from 'antd'



const Details = ({details, setShow, show}) => {
//for details I want to display the title, poster, rotten tomatoes rating, movie rating, runtime, genre, and the plot.  this will be displayed as a modal
    return (

        <div className='details' onClick={() => setShow(!show)}>
            <img style={{width: '35%'}} src={details.Poster} alt={details.Title}/>
            <h3><em>{details.Plot}</em></h3>
            <Button style={{margin: '.2em'}} danger className='type'>Rated: {details.Rated}</Button>
            <Button style={{margin: '.2em'}} danger className='type'>Runtime: {details.Runtime}</Button>
            <Button style={{margin: '.2em'}} danger className='type'>{details.Genre}</Button>
            <h3 style={{backgroundColor: 'yellow', color: 'black', display: 'inline-block', margin: '.2em', border: '1px solid yellow', borderRadius: '.25em'}}>IMDB Rating : {details.imdbRating}</h3>
        </div>
        
    )
}

export default Details