import React from 'react'
import home1 from '../img/home1.png'
import { Hide, Image, StyledAbout, StyledDescription } from '../styles'
import {motion} from 'framer-motion';
// Animations
import { photoAnim, titleAnim, fade } from '../animation'


const HeroSection = () => {

    return (
        <StyledAbout>
            <StyledDescription>
                <Hide>
                    <motion.h2 variants={titleAnim}>We work to make your</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}><span>dreams</span> come</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}>true.</motion.h2>
                </Hide>
                <motion.p variants={fade} className="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, ut dignissimos sapiente nam eaque porro impedit fugiat.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </StyledDescription>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="hero img"/>
            </Image>
        </StyledAbout>
    )
}

export default HeroSection
