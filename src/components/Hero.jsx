import React from 'react'
import { contentHero } from '../constants'
import { imgHero } from '../assets'
const Hero = () => {
  return (
    <div className="flex h-96 bg-sky-900 py-8 px-32">
        <div className="flex w-full h-full flex-col space-y-7">
            <p className="text-5xl text-white">{contentHero.title}</p>
            <p className="text-sm text-white text-ellipsis">{contentHero.content}</p>
        </div>
        <div className="w-full h-full justify-center hidden lg:flex">
            <img className="h-96" src={imgHero} alt="img"/>
        </div>
    </div>
  )
}

export default Hero