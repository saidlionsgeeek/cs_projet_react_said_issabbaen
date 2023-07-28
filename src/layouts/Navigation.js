import { NavLink } from "react-router-dom";
import "./_navigation.scss"
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai"
import { BsHandbag } from "react-icons/bs"
import { ShopContext } from "../context/Shop-context";
import { useContext } from "react";
export const Navigation = () => {
    const [showInfoDiv, setShowInfoDiv] = useState(false);
    const [showShopDiv, setShowShopDiv] = useState(false);
    const { allproducts, addToCart, cart, favorit } = useContext(ShopContext);


    const handleHeartClick = () => {
        setShowInfoDiv(!showInfoDiv);
        setShowShopDiv(false);
    };

    const handleShopClick = () => {
        setShowShopDiv(!showShopDiv);
        setShowInfoDiv(false);
    };
    const [navlink, setNavlink] = useState(["Home", "Product", "About", "Contact"])
    return (
        <nav className="d-flex justify-content-between align-items-center pe-8 ps-1 nav-d p-1 position-fixed top-0 z-3 w-100 bg-light">
            <div>
                <h1>LAzoNE<span className="text-red fw-bolder">.</span></h1>
            </div>
            <div>
                {
                    navlink.map((element, index) =>
                        <>
                            <NavLink to={index == 0 ? "/" : element.toLocaleLowerCase()} className=" text-decoration-none   ">
                                <a className="ms-1 text-decoration-none text-dark">{element}</a>
                            </NavLink>
                        </>
                    )
                }
            </div>
            <div>
                <AiOutlineHeart onClick={handleHeartClick} />
                {showInfoDiv && (
                    <div
                        style={{
                            position: 'fixed',
                            top: '120px',
                            right: '50px',
                            zIndex: 9999,
                            background: '#fff',
                            padding: '10px',
                            border: '1px solid #ccc',
                            minWidth: '250px',
                            maxHeight: '550px',
                            minHeight: '150px',
                            overflowX: "scroll",
                            overflowX: 'hidden'
                        }}
                    >
                        <div className="">
                        <h3 className="text-center text-gray border-bottom">Favorite product</h3>
                            {
                                favorit.map((element) =>
                                        <>
                                            <div className="d-flex mb-1">
                                                <div>
                                                    <img width={'150px'} height={'150px'} src={element.images} alt="" />
                                                </div>
                                                <div className="ms-1">
                                                    <p>{element.nom}</p>
                                                    <p>{element.stock} x  {element.price} $</p>
                                                </div>
                                            </div>
                                        </>
                                )
                            }
                        </div>
                        <div className="text-center">
                        <button className="btn btn-secondary text-light mb-1 " onClick={() => setShowInfoDiv(false)}>Fermer</button>
                        <NavLink to={"/favorite"}>
                        <button className="btn btn-secondary text-light mb-1 " onClick={() => setShowInfoDiv(false)}>Go To favorite</button>
                        </NavLink>
                        </div>
                    </div>
                )}
                |
                <BsHandbag onClick={handleShopClick} />
                {showShopDiv && (
                    <div
                        style={{
                            position: 'fixed',
                            top: '120px',
                            right: '100px',
                            zIndex: 9999,
                            background: '#fff',
                            padding: '10px',
                            border: '1px solid #ccc',
                            minWidth: '250px',
                            maxHeight: '550px',
                            minHeight: '150px',
                            overflowX: "scroll",
                            overflowX: 'hidden'
                        }}
                    >
                        <div className="">
                        <h3 className="text-center text-gray border-bottom">cart product</h3>
                            {
                                cart.map((element) =>
                                        <>
                                            <div className="d-flex mb-1">
                                                <div>
                                                    <img width={'150px'} height={'150px'} src={element.images} alt="" />
                                                </div>
                                                <div className="ms-1">
                                                    <p>{element.nom}</p>
                                                    <p>{element.stock} x  {element.price} $</p>
                                                </div>
                                            </div>
                                        </>
                                )
                            }
                        </div>
                        <div className="text-center">
                        <button className="btn btn-secondary text-light mb-1 me-1 " onClick={() => setShowShopDiv(false)}>Fermer</button>
                        <NavLink to={"/cart"}>
                        <button className="btn btn-secondary text-light mb-1 me-1 " onClick={() => setShowShopDiv(false)}>Go To Cart</button>
                        </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
