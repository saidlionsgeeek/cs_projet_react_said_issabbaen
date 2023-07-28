import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./_carousels.scss"
import carousel1 from "../../../assets/images/carouselsimage1.jpg"
import carousel2 from "../../../assets/images/carouselsimages2.jpg"
import carousel3 from "../../../assets/images/carouselsimages3.jpg"
import carousel4 from "../../../assets/images/carouselsimages4.jpg"
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';

export default function Carousels() {
    return (
        <Carousel className='mt-4'>
         <Carousel.Item interval={2500}>
            <div  className="image-darken3 "  alt='image1' >
                <Carousel.Caption className='position-absolute top-50  start-50 translate-middle '>
                    <motion.h3 
                    initial={{y:-10 ,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:1,delay:0.5}}
                    >First slide label</motion.h3>
                    <motion.p
                    initial={{y:10 ,opacity:0 ,}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:1,delay:0.5}}
                    >Nulla vitae elit libero, a pharetra augue mollis interdum.</motion.p>
                    <NavLink to={"/product"}>
                <motion.button
                    initial={{y:-20 ,opacity:0 }}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:1,delay:0.5}}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1, x: "-5px", y: "5px" }}
                    className='button-shop'
                    > Shop now</motion.button>
                </NavLink>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000} >
                <div  className="image-darken1 " alt='image1' >
                <Carousel.Caption className='position-absolute top-50  start-50 translate-middle '>
                    <motion.h3 
                    initial={{y:-10 ,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:1,delay:0.5}}
                    >First slide label</motion.h3>
                    <motion.p
                    initial={{y:10 ,opacity:0 ,}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:1,delay:0.5}}
                    >Nulla vitae elit libero, a pharetra augue mollis interdum.</motion.p>
                    <NavLink to={"/product"}>
                <motion.button
                    initial={{y:-20 ,opacity:0 }}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:1,delay:0.5}}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1, x: "-5px", y: "5px" }}
                    className='button-shop'
                    > Shop now</motion.button>
                </NavLink>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
            <div  className="image-darken2 "  alt='image1' >
                <Carousel.Caption className='position-absolute top-50  start-50 translate-middle '>
                    <motion.h3 
                    initial={{y:-10 ,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:1,delay:0.5}}
                    >First slide label</motion.h3>
                    <motion.p
                    initial={{y:10 ,opacity:0 ,}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:1,delay:0.5}}
                    >Nulla vitae elit libero, a pharetra augue mollis interdum.</motion.p>
                <NavLink to={"/product"}>
                <motion.button
                    initial={{y:-20 ,opacity:0 }}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:1,delay:0.5}}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1, x: "-5px", y: "5px" }}
                    className='button-shop'
                    > Shop now</motion.button>
                </NavLink>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
            <div  className="image-darken4 "  alt='image1' >
                <Carousel.Caption className='position-absolute top-50  start-50 translate-middle '>
                    <motion.h3 
                    initial={{y:-10 ,opacity:0}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:1,delay:0.5}}
                    >First slide label</motion.h3>
                    <motion.p
                    initial={{y:10 ,opacity:0 ,}}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:1,delay:0.5}}
                    >Nulla vitae elit libero, a pharetra augue mollis interdum.</motion.p>
                    <NavLink to={"/product"}>
                <motion.button
                    initial={{y:-20 ,opacity:0 }}
                    whileInView={{y:0,opacity:1}}
                    transition={{duration:1,delay:0.5}}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1, x: "-5px", y: "5px" }}
                    className='button-shop'
                    > Shop now</motion.button>
                </NavLink>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}
