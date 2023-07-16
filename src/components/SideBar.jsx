import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getCategory } from '../store/category/actions';

const SideBar = () => {
    const { entities, loading } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchProducts = async () => {
        dispatch(getCategory());
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div id="default-sidebar" className="cursor-pointer sticky top-0 left-0 z-40 w-34 h-screen h-full transition-transform  sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-hidden bg-gray-50 dark:bg-gray-800">
                
                <ul className="space-y-6 font-bold text-white">
                    {/* {
                            entities.map((product) => {
                                return (
                                    <li >{product.category}</li>
                                );
                            })

                        } */}
                    <li onClick={() => navigate(`/`)} className='text-xl text-yellow-500'>Home</li>    
                    <li onClick={() => navigate(`products/electronics`)}>electronics</li>
                    <li onClick={() => navigate(`products/jewelery`)}>jewelery</li>
                    <li onClick={() => navigate(`products/mens`)}>men's clothing</li>
                    <li onClick={() => navigate(`products/womens`)}>women's clothing</li>
                </ul>
            </div>
        </div>

    );
};

export default SideBar