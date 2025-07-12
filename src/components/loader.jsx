import React from 'react'

const Loader = () => {
  return (
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-zinc-800 rounded p-1'>
    <svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
    </div>
  )
}

export default Loader