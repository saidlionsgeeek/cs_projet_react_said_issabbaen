import React from 'react'
import "./_footer.scss"
import { AiOutlineHeart } from "react-icons/ai"
import { FaFacebookF, FaPinterestP, FaSnapchatGhost,FaCcPaypal,FaCcVisa ,FaCcMastercard,FaCcDiscover} from "react-icons/fa"
import { BsInstagram, BsYoutube } from "react-icons/bs"

export default function Footer() {
    return (
        <section className='footer'>
            <div className='d-block d-lg-flex justify-content-center align-items-center pt-4 '>
                <div className='w-100 mb-2 ms-0 ms-lg-2'>
                    <h3 className='text-center'>GET IN TOUCH</h3>
                    <p className='text-center'>Any questions? Let us know in store at 8th floor , 379 Hudson St, New York , NY 10018 or call us on (+1)96 716 6879</p>
                    <div className='text-center'>
                        <FaFacebookF className='space-1'/>
                        <BsInstagram className='space-1'/>
                        <FaPinterestP className='space-1'/>
                        <FaSnapchatGhost className='space-1'/>
                        <BsYoutube className='space-1'/>
                    </div>
                </div>
                <div className='w-100 text-center mb-2 '>
                    <h3>Links</h3>
                    <ul className=' list-unstyled'>
                        <li>Search</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div className='w-100 text-center mb-2 '>
                    <h3>Links</h3>
                    <ul className=' list-unstyled'>
                        <li>Search</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Returns</li>
                    </ul>
                </div>
            </div>
            <div className='text-center pt-3 fs-2 pb-1'>
            <FaCcPaypal  className='space'/>
            <FaCcVisa className='space'/>
            <FaCcMastercard className='space'/>
            <FaCcDiscover className='space'/>
            <p className=' fs-6 mb-1'>copyright All rights reserved</p>
            </div>
        </section>
    )
}
