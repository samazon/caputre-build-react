import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Images
import athlete from '../img/athlete-small.png'
import goodtimes from '../img/goodtimes-small.png'
import theracer from '../img/theracer-small.png'

// Animation
import {motion} from 'framer-motion'
import {pageAnimation, fade, photoAnim,lineAnim, slider, sliderContainer} from '../animation'

const OurWork = () => {
    return (
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={fade}>The Athelete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Hide>
                    <Link to="/work/the-athlete">
                        <motion.img variants={photoAnim} src={athlete} alt="athlete"/>
                    </Link>
                </Hide>
            </Movie>
            <Movie>
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <div className="line"></div>
                <Hide>
                    <Link to="/work/the-racer">
                        <motion.img variants={photoAnim} src={theracer} alt="theracer"/>
                    </Link>
                </Hide>
            </Movie>
            <Movie>
                <motion.h2 variants={fade}>Good Times</motion.h2>
                <div className="line"></div>
                <Hide>
                    <Link to="/work/good-times">
                        <motion.img variants={photoAnim} src={goodtimes} alt="goodtimes"/>
                    </Link>
                </Hide>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    padding: 5rem 2rem;
    background-color: #fff;
`
const Movie = styled.div`
    h2 {
        padding: 1rem 0;
    }
    .line {
        height: 0.5rem;
        background-color: #23d997;
        margin: 0 0 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
const Hide = styled.div`
    overflow: hidden;
`
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width:100%;
    height: 100vh;
    z-index:2;
    background: #fffebf;
`
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background: #8effa0;
`
export default OurWork
