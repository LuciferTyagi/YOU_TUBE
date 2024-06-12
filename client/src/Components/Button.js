import React from 'react'

const Button = ({name}) => {
  return (
    <div className=''>
      <button className='px-4 py-2 ml-2 mr-4 bg-slate-300 hover:bg-slate-400 transition duration-300 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
