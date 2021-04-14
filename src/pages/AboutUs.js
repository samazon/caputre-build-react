import React from 'react'
// Pages
import FaqSection from '../components/FaqSection'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
// Animation
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'

const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <HeroSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    )
}

export default AboutUs
