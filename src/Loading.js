import React from 'react'
import spun from './spun.gif'

const Loading = () => {
  return (
    <img
      alt='loading'
      src={spun}
      style={{ display: 'block', margin: '0 auto', opacity: '0.5' }}
    ></img>
  )
}

export default Loading
