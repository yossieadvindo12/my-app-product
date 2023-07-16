import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addItem } from '../store/checkout/slice';

const CardProduct = ({ product, entity }) => {
    const navigate = useNavigate();
    return (
        <div
            key={product.id}
            className="cursor-pointer w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow py-5"
            onClick={() => navigate(`detail/${product.id}`)}
        >
            <figure>
                <img
                    className="p-8 h-96 w-96"
                    src={product.image}
                    alt="Product"
                />
            </figure>
            <div className="px-5 pb-5">
                <h5 className="text-base font-semibold tracking-tight text-sky-900 py-5 cursor-pointer">
                    {product.title}
                </h5>
                {/* <p>{product.description}</p> */}
                <span className="text-3xl font-bold text-sky-900">
                    <p>$ {product.price}</p>
                </span>
                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => dispatch(addItem(entity))}>Add to cart</a>
            
                
            </div>
        </div>
    );
          


    // <div className="flex flex-col w-full max-h-screen bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 items-center ">
    //     <a href="#">
    //         <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={product.image} alt="product image" />
    //     </a>
    //     <div className="items-center">
    //         <a href="#">
    //             <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
    //         </a>

    //         <div className="flex items-center flex-col">
    //             <span className="text-lg font-bold text-gray-900 dark:text-white">${product.price}</span>
    //             <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => dispatch(addItem(entity))}>Add to cart</a>
    //         </div>
    //     </div>
    // </div>


    // )
}

export default CardProduct