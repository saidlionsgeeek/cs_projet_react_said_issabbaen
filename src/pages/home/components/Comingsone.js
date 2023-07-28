import React from 'react'
import "./_comingsone.scss"
import img  from "../../../assets/images/imgs/item-05.jpg"
import img1  from "../../../assets/images/imgs/item-03.jpg"
import img2  from "../../../assets/images/imgs/item-07.jpg"
export default function Comingsone() {
  return (
    <div className='container d-flex flex-wrap gap-1 justify-content-center mt-2 '>
        <div className='position-relative' >
        <img src={img} width={350} height={400} alt="" />
            <p className='commingsoon1 text-center  fs-4 '>COMING SOON</p>
        </div>

        <div className='position-relative'>
        <img src={img2} width={350} height={400} alt="" />
            <p className='commingsoon1 text-center fs-4 ' >COMING SOON</p>
        </div>

        <div className='position-relative' >
        <img src={img1} width={350} height={400} alt="" />
            <p className='commingsoon1 text-center fs-4 '>COMING SOON</p>
        </div>

    </div>
  )
}
