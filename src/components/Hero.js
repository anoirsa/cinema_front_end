import React,{useState, useEffect, useRef} from 'react'
import { Button } from './Button';
import './Hero.css';
import Cinema from '../images/Cinema1.jpg'
import { SlideItems } from '../data/SlideItems';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';


const Hero = ({slides}) => {
    const length = slides.length;
    const [currentV, setCurrent] = useState(0);
    const timeout = useRef(null);
    const nextSlide = () => {
        
        setCurrent(currentV === length - 1 ? 0 : currentV +1 )
    }

    const prevSlide  = () => {
        
        setCurrent(currentV === 0 ? length - 1 : currentV -1)
    }
    

    if (!Array.isArray(slides) && slides.length <= 0) {
        return null;
    }
    return (
        <div className="heroMain--container">
            {slides.map((item, index) => {
                return (
                    <div className={currentV === index ? "hero-wrapper active" :"hero-wrapper"} key={index}>
                        {currentV === index && <div className="hero--details">
                            <h1>{item.label}</h1>
                            <p>{item.price}</p>
                            <Button primary={true} content={true}>View Subscription</Button>
                        </div> }

                         {currentV === index && <img src={item.image} /> }
                     </div>
                    )
                 })} 

           <section className="button--section">
               <IoArrowBack className="forwardBack"  onClick={prevSlide}/>
               <IoArrowForward className="forwardBack" onClick={nextSlide} />

            </section> 
        </div>
    )
}

export default Hero



/**
 onst Hero = () => {
    return (
        <div className="heroMain--container">
            <div className="hero-wrapper">
                <div className="hero--details">
                    <h1>Limited subscription, Watch Monthly</h1>
                    <p>$23.000</p>
                    <Button primary={true} content={true}>View Subscription</Button>
                </div>

                <img  src={Cinema} />
        </div>
            
        </div>
    )
}
 */
