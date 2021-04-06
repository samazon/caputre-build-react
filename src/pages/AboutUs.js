import React from 'react'
import FaqSection from '../components/FaqSection'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'


const AboutUs = () => {
    return (
        <div className="about__us">
            <HeroSection />
            <ServicesSection />
            <FaqSection />
        </div>
    )
}

export default AboutUs
