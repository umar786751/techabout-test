import React from 'react'

const Button = ({text}) => {
  return (
    <>
            <button className='bg-slate-900 font-bold text-white px-4 py-2 rounded-md'>{text}</button>
    </>
  )
}

export default Button