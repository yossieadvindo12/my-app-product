import React from 'react'
import { navLinks } from '../constants'
import Button from './Button'

const Header = () => {
    return (
        <div className="flex h-24 bg-[#152A46] py-8 px-32 justify-center">
            <h1 className="text-xl font-bold text-white  cursor-pointer">
                Kasir baru
            </h1>
            {/* <ul className="flex space-x-6 items-center">
                {navLinks.map((index) => (
                    <li key={index.id} className="text-sm font-bold text-white cursor-pointer">
                        {index.title}
                    </li>
                ))}
                <Button title="Masuk/Daftar"/>
            </ul> */}
        </div>
    )
}

export default Header