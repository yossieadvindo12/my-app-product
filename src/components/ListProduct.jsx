import React, { useState } from 'react'
import { Product } from '../constants'
import CardProduct from './cardProduct'



const ListProduct = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-32">
            {Product.map((index) => (
               <CardProduct key={index.id} product={index}/>
            ))}
            
        </div>
    )
}

export default ListProduct