import React from 'react'
import { ShopContext } from '../../../context/Shop-context';
import { useContext } from 'react';

export default function FavoriteItmes() {
    const { allproducts, addToCart, cart, favorit,removeStock,addStock,removeAllProducts,addtocartfromfavorit } = useContext(ShopContext);
    console.log(favorit);
    return (
        <>
            <section className='my-4 container border'>
            <ul className='ms-3 ps-5 d-flex justify-content-evenly list-unstyled fs-5 fw-bold'>
                        <li>PRODUCT</li>
                        <li> PRICE</li>
                        <li>Quntity</li>
                        <li>Toltal</li>
                    </ul>
                {
                    
                    favorit.map((element, index) =>
                        <>
                            <div className='d-flex justify-content-evenly align-items-center pt-1 pb-1 border-bottom'>
                                <img width={"200px"} height={"200px"} src={element.images} alt="" />
                                <p>{element.nom}</p>
                                <p>{element.price}</p>
                                <div className='d-flex justify align-items-center'>
                                    <button onClick={()=>{
                                        removeStock(index)
                                    }}>-</button>
                                    <div className='border px-1 d-flex justify-content-center align-items-center'>
                                    <p className=''>{element.stock}</p>
                                    </div>
                                    <button onClick={()=>{
                                        addStock(index)
                                    }}>+</button>
                                </div>
                                <p>{element.stock*element.price} $</p>
                                <button className='btn btn-primary rounded-2 text-light' onClick={()=>{
                                    addtocartfromfavorit(index)
                                }}>add</button>
                            </div>
                        </>
                    )
                }
                <div className='text-center'>
                    <button className='btn btn-primary' onClick={()=>{
                        removeAllProducts()
                    }}>remove all product</button>
                </div>
            </section>
        </>
    )
}
