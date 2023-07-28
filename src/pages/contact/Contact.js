import React from 'react'
import "./_contact.scss"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <>
        <section className="banner">
            <h1 className="about mt-5">CONTACT</h1>
        </section>
        <section className='container d-block d-lg-flex justify-content-center mb-3'>
            <div className='mt-2 d-flex justify-content-center'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d53183.198213784715!2d-7.5955118244176205!3d33.58065033952645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1690484217130!5m2!1sfr!2sma" width="380" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='mt-2  ms-lg-2'>
                <h3 className='text-center text-lg-start '>Send us your Message</h3>
                <div className='text-center text-lg-end d-lg-flex flex-column '>
                <input className='input' type="text" placeholder='Full Name' />
                <input className='input' type="text" placeholder='Phone Number' />
                <input className='input' type="text" placeholder='Email Address' />
                <textarea className='border-gray' name="" id="" cols="46" rows="5" placeholder='Message'></textarea>
                </div>
                <div className='text-center text-lg-start mt-1'>
                <motion.button 
                initial={{rotate:10,rotate:-10}}
                whileInView={{rotate:0,rotate:0}}
                transition={{duration:0.5,delay:0.5}}
                whileHover={{scale:1.1 }}
                className='text-light bg-black rounded-5 px-2  '>Send</motion.button>
                </div>
            </div>
        </section>
    </>
  )
}
