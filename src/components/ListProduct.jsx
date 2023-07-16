import React, { useState } from 'react'
import { Product } from '../constants'
import CardProduct from './cardProduct'



const ListProduct = () => {
    return (
        <div className="w-[25%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-32 bg-[#EFF4FA]">
            {Product.map((index) => (
               <CardProduct key={index.id} product={index}/>
            ))}
            
        </div>
    )
}

export default ListProduct