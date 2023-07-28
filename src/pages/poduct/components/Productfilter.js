import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useContext } from 'react';
import { ShopContext } from '../../../context/Shop-context';
import { useState } from 'react';
import "./_productfilter.scss"
import { useEffect } from 'react';
import { AiOutlineHeart } from "react-icons/ai"


export default function Productfilter() {
    const { allproducts, addToCart, addToFavorit } = useContext(ShopContext);
    const [categories, setCategories] = useState("all")
    const [input, setInput] = useState("")
    const [filter, setFilter] = useState([])
    const [khdama, setKhdama] = useState(true)

    useEffect(() => {

        const filteredProduct = allproducts.filter(
            (element) => element.nom.includes(input)
        )
        setFilter(filteredProduct)
        return () => {
            return filteredProduct
        }

    }, [khdama])
    console.log(input);

    return (
        <>
            <section className='container mt-2'>
                <div className='d-flex'>
                    <div>
                        <div>
                            <h2>catégories</h2>
                            <ul className=' list-unstyled mt-1 text-gray '>
                                <li ><button className='btn' onClick={() => {
                                    setCategories("all")
                                }}>All</button></li>
                                <li ><button className='btn' onClick={() => {
                                    setCategories("women")
                                }}>Women</button></li>
                                <li ><button className='btn' onClick={() => {
                                    setCategories("men")
                                }}>Men</button></li>
                                <li ><button className='btn' onClick={() => {
                                    setCategories("accessoire")
                                }}>Accessoires</button></li>
                            </ul>
                        </div>
                        <div>
                            <h2>Filter</h2>
                            <div className='d-flex '>
                                <input type="text" placeholder={"Search Products"} onChange={(event) => {
                                    setInput(event.target.value)
                                }} />
                                <button className='btn' onClick={() => {
                                    khdama == true ?
                                        setKhdama(false)
                                        :
                                        setKhdama(true)
                                }}><AiOutlineSearch className='' /></button>
                            </div>
                        </div>
                    </div>
                    <div className='m-2 ms-3 d-flex flex-wrap gap-1'>
                        {
                            input.length > 0 ?

                                filter.length > 0 ?
                                    filter.map((ele, idx) =>
                                        <>
                                            <div className='position-relative'>
                                                {
                                                    ele.arrivage == "new" ?
                                                        <p className='position-absolute z-2 top-0 bg-success text-light rounded-3 width-arrivage m-1 text-center'> new</p>
                                                        : ele.arrivage == "sale" ?
                                                            <p className='position-absolute z-2 top-0 text-light rounded-3 width-arrivage m-1 bg-orange text-center'> sale</p>
                                                            : ele.arrivage == "old" ?
                                                                <p className='position-absolute z-2 top-0 text-light rounded-3 width-arrivage m-1 text-center border border-black text-black'> old</p>
                                                                :
                                                                <>
                                                                </>
                                                }
                                                <div className='images-background'>
                                                    <img width={300} height={300} src={ele.images} alt={ele.nom} />
                                                    <button className='btn-favorite btn fs-3 text-light' onClick={() => {
                                                        addToFavorit(idx)
                                                    }}><AiOutlineHeart /></button>
                                                    <button className='btn-add-to-cart' onClick={() => {
                                                        addToCart(idx)
                                                    }} >Add To Cart</button>
                                                </div>
                                                <p className='mt-1'>{ele.nom}</p>
                                                {
                                                    ele.descount ?
                                                        <p><span className='text-decoration-line-through'>{ele.price} $</span> <span className='text-danger '>{ele.descount} $</span></p>
                                                        :
                                                        <p>{ele.price} $</p>
                                                }
                                            </div>
                                        </>
                                    )
                                    :
                                    <>
                                        <h1>We couldn't find any matching results.</h1>
                                    </>
                                :
                                allproducts.map((element, index) =>
                                    element.categorie == categories ?
                                        <>
                                            <div className='position-relative'>
                                                {
                                                    element.arrivage == "new" ?
                                                        <p className='position-absolute z-2 top-0 bg-success text-light rounded-3 width-arrivage m-1 text-center'> new</p>
                                                        : element.arrivage == "sale" ?
                                                            <p className='position-absolute z-2 top-0 text-light rounded-3 width-arrivage m-1 bg-orange text-center'> sale</p>
                                                            : element.arrivage == "old" ?
                                                                <p className='position-absolute z-2 top-0 text-light rounded-3 width-arrivage m-1 text-center border border-black text-black'> old</p>
                                                                :
                                                                <>
                                                                </>
                                                }
                                                <div className='images-background'>
                                                    <img width={300} height={300} src={element.images} alt={element.nom} />
                                                    <button className='btn-favorite btn fs-3 text-light' onClick={() => {
                                                        addToFavorit(index)
                                                    }}><AiOutlineHeart /></button>
                                                    <button className='btn-add-to-cart ' onClick={() => {
                                                        addToCart(index)
                                                    }}>Add To Cart</button>
                                                </div>
                                                <p className='mt-1'>{element.nom}</p>
                                                {
                                                    element.descount ?
                                                        <p><span className='text-decoration-line-through'>{element.price} $</span> <span className='text-danger '>{element.descount} $</span></p>
                                                        :
                                                        <p>{element.price} $</p>
                                                }
                                            </div>
                                        </>
                                        : categories == "all" ?
                                            <>
                                                <div className='position-relative'>
                                                    {
                                                        element.arrivage == "new" ?
                                                            <p className='position-absolute z-2 top-0 bg-success text-light rounded-3 width-arrivage m-1 text-center'> new</p>
                                                            : element.arrivage == "sale" ?
                                                                <p className='position-absolute z-2 top-0 text-light rounded-3 width-arrivage m-1 bg-orange text-center'> sale</p>
                                                                : element.arrivage == "old" ?
                                                                    <p className='position-absolute z-2 top-0 text-light rounded-3 width-arrivage m-1 text-center border border-black text-black'> old</p>
                                                                    :
                                                                    <>
                                                                    </>
                                                    }
                                                    <div className='images-background'>
                                                        <img width={300} height={300} src={element.images} alt={element.nom} />
                                                        <button className='btn-favorite btn fs-3 text-light' onClick={() => {
                                                            addToFavorit(index)
                                                        }}><AiOutlineHeart /></button>
                                                        <button className='btn-add-to-cart ' onClick={() => {
                                                            addToCart(index)
                                                        }}>Add To Cart</button>
                                                    </div>

                                                    <p className='mt-1'>{element.nom}</p>
                                                    {
                                                        element.descount ?
                                                            <p><span className='text-decoration-line-through'>{element.price} $</span> <span className='text-danger '>{element.descount} $</span></p>
                                                            :
                                                            <p>{element.price} $</p>
                                                    }
                                                </div>
                                            </>
                                            :
                                            <>

                                            </>
                                )

                        }
                    </div>
                </div>
            </section>
        </>
    )
}
