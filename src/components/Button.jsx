import React from 'react'

const Button = ({title}) => {
  return (
    <button className='flex w-auto p-5 justify-center items-center bg-[#FF6161] rounded-[50px] text-white'>
        {title}
    </button>
  )
}

export default Button