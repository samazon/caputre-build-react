import React from 'react'
import home1 from '../img/home1.png'
import { Hide, Image, StyledAbout, StyledDescription } from '../styles'


const HeroSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <Hide>
                    <h2>We work to make your</h2>
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
