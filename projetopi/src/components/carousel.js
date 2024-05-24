import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import PizzaSalg from "../images/pizzasalg.jpg"

function CarrosselPizzaSalg () {
    return (
        <Carousel width={'259px'} showThumbs={false} centerMode={true} centerSlidePercentage={50}>
            <div className='pizzasalg'>
                <img src={PizzaSalg} alt=""/>
            </div>
            <div className='pizzasalg'>
                <img src={PizzaSalg} alt=""/>
            </div>
            <div className='pizzasalg'>
                <img src={PizzaSalg} alt=""/>
            </div>
            <div className='pizzasalg'>
                <img src={PizzaSalg} alt=""/>
            </div>
            <div className='pizzasalg'>
                <img src={PizzaSalg} alt=""/>
            </div>
            <div className='pizzasalg'>
                <img src={PizzaSalg} alt=""/>
            </div>
            <div className='pizzasalg'>
                <img src={PizzaSalg} alt="" />
            </div>
            <div className='pizzasalg'>
                <img src={PizzaSalg} alt="" />
            </div>
            <div className='pizzasalg'>
                <img src={PizzaSalg} alt="" />
            </div>
            <div className='pizzasalg'>
                <img src={PizzaSalg} alt="" />
            </div>
        </Carousel>
    );
}
export default CarrosselPizzaSalg;