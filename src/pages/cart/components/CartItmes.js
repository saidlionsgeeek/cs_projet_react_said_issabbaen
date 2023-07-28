import React from 'react'
import { ShopContext } from '../../../context/Shop-context';
import { useContext } from 'react';

export default function CartItmes() {
    const { allproducts, addToCart, cart, favorit,removeStockCart,addStockcart,removeAllProductsCart } = useContext(ShopContext);
    return (
        <>
            <section className='my-4 container border favorit'>
            <ul className='ms-8 ps-8 d-flex justify-content-evenly list-unstyled fs-5 fw-bold'>
                        <li>PRODUCT</li>
                        <li> PRICE</li>
                        <li>Quntity</li>
                        <li>Toltal</li>
                    </ul>
                {
                    
                    cart.map((element, index) =>
                        <>
                            <div className='d-flex justify-content-evenly align-items-center pt-1 pb-1 border-bottom'>
                                <img width={"200px"} height={"200px"} src={element.images} alt="" />
                                <p>{element.nom}</p>
                                <p>{element.price}</p>
                                <div className='d-flex justify align-items-center'>
                                    <button onClick={()=>{
                                        removeStockCart(index)
                                    }}>-</button>
                                    <div className='border px-1 d-flex justify-content-center align-items-center'>
                                    <p className=''>{element.stock}</p>
                                    </div>
                                    <button onClick={()=>{
                                        addStockcart(index)
                                    }}>+</button>
                                </div>
                                <p>{element.stock*element.price} $</p>
                            </div>
                        </>
                    )
                    
                }
                <div className='text-center'>
                    <button className='btn btn-primary' onClick={()=>{
                        removeAllProductsCart()
                    }}>Chekout</button>
                </div>
            </section>
        </>
    )
}
