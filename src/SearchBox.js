import React, {useState} from 'react'

const SearchBox = ({searchMovies}) => {
    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault() 
        if(text === ''){
            alert('Please enter something')
        } else {
            searchMovies(text)
            setText('')
        } 
    }
    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input 
                type="text"
                placeholder='search movies'
                onChange={onChange}
                name='text'
                value={text}
                />
                <input 
                type='submit'
                value='search'
                className='btn'
                />
            </form>
        </div>
    )
}

export default SearchBox
