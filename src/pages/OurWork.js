import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Images
import athlete from '../img/athlete-small.png'
import goodtimes from '../img/goodtimes-small.png'
import theracer from '../img/theracer-small.png'

const OurWork = () => {
    return (
        <Work>
            <Movie>
                <h2>The Athelete</h2>
                <div className="line"></div>
                <Link>
                    <img src={athlete} alt="athlete"/>
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link>
                    <img src={theracer} alt="theracer"/>
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link>
                    <img src={goodtimes} alt="goodtimes"/>
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled.div`
    min-height: 100vh;
    padding: 5rem 2rem;
`
const Movie = styled.div`
    color:#fff;
    h2 {
        padding: 1rem 0;
    }
    .line {
        height: 0.5rem;
        background-color: #ccc;
        margin: 0 0 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
export default OurWork
