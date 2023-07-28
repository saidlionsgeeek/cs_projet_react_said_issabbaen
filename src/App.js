import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Navigation } from "./layouts/Navigation";
import ShoContextProvider from "./context/Shop-context";
import Footer from "./layouts/Footer";
import Contact from "./pages/contact/Contact";
import Product from "./pages/poduct/Product";
import { Cart } from "./pages/cart/Cart";
import Favorite from "./pages/favorite/Favorite";

export const App = () => {
  return (
    <>
      <ShoContextProvider>
        <Navigation />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </ShoContextProvider>
      <Footer/>
    </>
  );
};
