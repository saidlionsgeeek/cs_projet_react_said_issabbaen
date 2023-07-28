import "./_banner.scss"
import React from 'react'
import about from "../../../assets/images/imgs/about.jpg"

export default function Banner() {
    return (
    <>
        <section className="banner">
            <h1 className="about mt-5">ABOUT</h1>
        </section>
        <section className=" w-100  container mt-3 mt-lg-3 mx-0 mx-lg-8 d-flex flex-md-column align-items-center justify-content-center
        flex-column flex-lg-row flex-xl-row
         mb-3"> 
        <div className="text-center"  >
            <img width={350} height={450} src={about} alt="" />
        </div>
        <div className="m-2 text-center text-lg-start">
            <h1 className="">Our story</h1>
            <p className="text-gray">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, adipisci! Rem, consequuntur suscipit eveniet eius odit quis, dolorem aut veritatis possimus dicta iure dolore minima! Non numquam pariatur delectus, praesentium veniam quibusdam labore accusantium officiis maiores facilis ducimus neque. At deleniti voluptatibus magni nulla vero eligendi obcaecati voluptatem, placeat eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maiores ex hic minus accusamus rerum nemo quos, vero eaque totam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, beatae quo autem reprehenderit corrupti accusamus numquam ducimus sit velit sed.</p>
            <p className=" border-5 ps-2 border-start text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis odio et quibusdam sit quis voluptatibus facere dignissimos vitae unde, esse, eveniet atque ducimus corporis officiis delectus? Adipisci, odit voluptas?</p>
        </div>
        </section>
    </>
  )
}
