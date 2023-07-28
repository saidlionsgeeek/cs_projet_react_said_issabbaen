import React, { createContext } from "react";
import { useContext } from "react";
import img1 from "../assets/images/imgs/eye-speak-Ba8JB_A7www-unsplash.jpg"
import img2 from "../assets/images/imgs/sven-ciupka-x8Vg7Up6TUc-unsplash.jpg"
import img3 from "../assets/images/imgs/faith-yarn-Wr0TpKqf26s-unsplash.jpg"
import img4 from "../assets/images/imgs/jaqueline-fritz-DyT4a9GEjaA-unsplash.jpg"
import img5 from "../assets/images/imgs/banner-02.jpg"
import img6 from "../assets/images/imgs/banner-08.jpg"
import img7 from "../assets/images/imgs/blog-01.jpg"
import img8 from "../assets/images/imgs/item-cart-03.jpg"
import img9 from "../assets/images/imgs/shop-item-09.jpg"
import { useState } from "react";

export const ShopContext = createContext(null);


export default function ShoContextProvider(props) {

    const creatproduct = (stat, nom, images, price, descount, arrivage, categorie) => ({
        stat,
        nom,
        images,
        price,
        descount,
        arrivage,
        categorie,
    })
    const allproducts = [
        creatproduct("best seller", "Hershel supply co 25l", img1, 75.22, 0, "new", "men"),
        creatproduct("best seller", "sven ciupka", img2, 70.00, 0, "", "men"),
        creatproduct("best seller", "faith yarn", img3, 75.00, 0, "", "men"),
        creatproduct("best seller", "jaqueline fritz", img4, 60.00, 15.00, "sale", "men"),
        creatproduct("new", "Hershel supply co 25l", img5, 75.00, 0, "new", "women"),
        creatproduct("new", "faith yarn", img6, 60.00, 0, "new", "women"),
        creatproduct("sale", "faith yarn", img7, 60.00, 0, "sale", "women"),
        creatproduct("sale", "bag", img7, 70.00, 0, "sale", "accessoire"),
        creatproduct("old", "watch", img8, 60.00, 35.00, "old", "accessoire"),
        creatproduct("old", "sunglasses", img9, 60.00, 45.00, "old", "accessoire"),
    ]

    const [cart, setCart] = useState([])
    const [favorit, setFavorit] = useState([])
    const addToCart = (index) => {
        const newProducts = [...allproducts];
        const newcart = [...cart];
        const existingProduct = newcart.find(
            (element) => element.images === newProducts[index].images
        );
        if (existingProduct === undefined) {
            newcart.push({
                ...newProducts[index],
                stock: 1,
            });
        } else {
            existingProduct.stock += 1;
        }
        setCart(newcart)
    }
    const addtocartfromfavorit = (index)=>{
       const newfavorit = [...favorit];
       const newcart = [...cart];

       newcart.push({
        ...newfavorit[index]
       })
       newfavorit.splice(index,1)
       setCart(newcart)
       setFavorit(newfavorit)
    }
    const addToFavorit = (index) => {
        const newProducts = [...allproducts];
        const newFvorit = [...favorit];
        const existingProduct = newFvorit.find(
            (element) => element.images === newProducts[index].images
        );
        if (existingProduct === undefined) {
            newFvorit.push({
                ...newProducts[index],
                stock: 1,
            });
        } else {
            existingProduct.stock += 1;
        }
        setFavorit(newFvorit)
    }

    const removeStock = (index) => {
        const newfavorit = [...favorit];
        
        const indexPanier = newfavorit.indexOf(newfavorit[index]);


        if (newfavorit[index].stock == 1) {

            alert("no product to remove")
        } else if (newfavorit[index].stock > 1) {
            newfavorit[index].stock -= 1;
        }
        setFavorit(newfavorit)
    }


    const removeStockCart = (index) => {
        const newCart = [...cart];

        if (newCart[index].stock == 1) {

            alert("no product to remove")
        } else if (newCart[index].stock > 1) {
            newCart[index].stock -= 1;
        }
        setCart(newCart)
    }

    const addStockcart = (index) => {
        const newCart = [...cart];

            newCart[index].stock += 1;
        setCart(newCart)
    }

    const addStock = (index) => {
        const newFavorit = [...favorit];

            newFavorit[index].stock += 1;
        setFavorit(newFavorit)
    }
    const removeAllProducts = () => {
        setFavorit([]); 
      };

      const removeAllProductsCart = () => {
        setCart([]); 
      };

    const contextValue = {addtocartfromfavorit, allproducts, cart, setCart, addToCart, addToFavorit,addStock, favorit, setFavorit, removeStock , removeStockCart,addStockcart ,removeAllProducts , removeAllProductsCart};
    return (
        <ShopContext.Provider value={contextValue} >{props.children}</ShopContext.Provider>
    )
}
