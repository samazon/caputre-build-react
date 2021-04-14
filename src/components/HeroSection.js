import React from 'react'
import home1 from '../img/home1.png'
import { Hide, Image, StyledAbout, StyledDescription } from '../styles'
import {motion} from 'framer-motion';


const HeroSection = () => {
    const titleAnim = {
        hidden: {opacity: 0},
        shown: {opacity: 1, transition: {duration: 2}}
    }
    return (
        <StyledAbout>
            <StyledDescription>
                <Hide>
                    <motion.h2>We work to make your</motion.h2>
                </Hide>
                <Hide>
                    <h2><span>dreams</span> come</h2>
                </Hide>
                <Hide>
                    <h2>true.</h2>
                </Hide>
                <p className="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, ut dignissimos sapiente nam eaque porro impedit fugiat.</p>
                <button>Contact Us</button>
            </StyledDescription>
            <Image>
                <img src={home1} alt="hero img"/>
            </Image>
        </StyledAbout>
    )
}

export default HeroSection
