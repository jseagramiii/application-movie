import React, {useState} from 'react'
import Details from './Details'

const Modal = ({movie}) => {
    
    return (
        <div>
            <Details movie={movie} />
        </div>
    )
}

export default Modal
