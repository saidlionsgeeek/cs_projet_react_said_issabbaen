import React from 'react'
import "./_gridsystem.scss"
import img from "../../../assets/images/imgs/banner-02.jpg"

export default function Gridsystam() {
    return (
        <div className='container bg-success wrapperr'>
            <div class="one">
            <img src={img} width={420} alt="" /></div>
            <div class="two">Deux</div>
            <div class="three">Trois</div>
            <div class="four">Quatre</div>
            <div class="five">Cinq</div>
            <div class="six">Six</div>
        </div>
    )
}
