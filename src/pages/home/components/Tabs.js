import React from 'react'
import "./_tabs.scss"
import { ShopContext } from '../../../context/Shop-context'
import { useContext } from 'react'
import { useState } from 'react';
import { motion } from "framer-motion"
import {AiOutlineHeart} from "react-icons/ai"



export default function Tabs() {
    const { allproducts ,addToCart , addToFavorit} = useContext(ShopContext);
    const [stat, setStat] = useState("best seller")
    
    return (
        <>
            <section className='container mt-5'>
                <h1 className='title-product text-center'>OUR PRODUCTS</h1>
                <ul className='d-flex list-unstyled gap-2 justify-content-center fs-5 '>
                    <li className='btn' onClick={() => {
                        setStat("best seller")
                    }}>Best Seller</li>
                    <li className='btn' onClick={() => {
                        setStat("new")
                    }}>New</li>
                    <li className='btn' onClick={() => {
                        setStat("sale")
                    }}>Sale</li>
                    <li className='btn' onClick={() => {
                        setStat("old")
                    }}>Old</li>
                </ul>

                <div className='d-flex gap-1 justify-content-center flex-wrap container'>

                    {
                        allproducts.map((element,index) =>
                            element.stat === stat ?
                                <>
                                    <motion.div className='position-relative'
                                        whileHover={{}}
                                    >
                                        {
                                            element.arrivage == "new" ?
                                                <p className='position-absolute top-0 bg-success text-light rounded-3 width-arrivage m-1 text-center z-2'> new</p>
                                                : element.arrivage == "sale" ?
                                                    <p className='position-absolute top-0 text-light rounded-3 width-arrivage m-1 bg-orange text-center z-2'> sale</p>
                                                    : element.arrivage == "old" ?
                                                        <p className='position-absolute top-0 text-light rounded-3 width-arrivage m-1 text-center border border-black text-black z-2'> old</p>
                                                        :
                                                        <>

                                                        </>
                                        }
                                        <div className='images-background'>
                                            <img width={300} height={300} src={element.images} alt={element.nom} className='images-tabs' />
                                            <button className='btn-favorite btn fs-3 text-light' onClick={()=>{
                                                addToFavorit(index)
                                            }}><AiOutlineHeart/></button>
                                            <button className='btn-add-to-cart  ' onClick={()=>{
                                                addToCart(index)
                                            }}>Add To Cart</button>
                                        </div>
                                        <p>{element.nom} </p>
                                        {
                                            element.descount ?
                                                <p><span className='text-decoration-line-through'>{element.price} $</span> <span className='text-danger '>{element.descount} $</span></p>
                                                :
                                                <p>{element.price} $</p>
                                        }
                                    </motion.div>
                                </>
                                :
                                <>

                                </>
                        )
                    }
                </div>
            </section>
        </>
    )
}
