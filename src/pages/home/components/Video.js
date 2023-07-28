import React from 'react'
import video from "../../../video/Cinematic Fashion Video Shot on Sony A7III.mp4"
import "./_video.scss"
import { BsFillPlayFill } from 'react-icons/bs'
export default function Video() {
  
  return (
    <>
    <div className='  video mt-3 d-flex flex-column align-items-center justify-content-center text-light pb-2'>
        <h3>The Beauty</h3>
        <h1>LOOKBOOK</h1>
        <p className='d-flex align-items-center'> <BsFillPlayFill className='fs-4'/> PLAY VIDEO</p>
    </div>
    </>
  )
}
