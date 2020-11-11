import React, {useState} from 'react'
import Loading from './Loading'

const SearchBox = ({searchMovies, loading}) => {
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
    if (loading) return <Loading />

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input 
                type="text"
                placeholder='search movies'
                onChange={onChange}
                name='text'
                value={text}
                style={{width: '80%', margin: '1em auto 0 auto'}}
                />
                <input 
                type='submit'
                value='search'
                className='btn'
                style={{width: '70%', margin: '0.5em auto 0 auto'}}
                
                />
            </form>
        </div>
    )
}

export default SearchBox