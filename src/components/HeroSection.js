import React from 'react'
import home1 from '../img/home1.png'
import styled from 'styled-components'


const HeroSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <Hide>
                    <h2>We work to make your <span>dreams</span> come true.</h2>
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

const StyledAbout = styled.div`
    min-height:90vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 10rem;
    color: #fff;
`

const StyledDescription = styled.div`
    padding-right: 5rem;
    flex: 1;
    h2{ 
        font-weight: lighter;
        max-width: 560px;
    }
`
const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        max-height: 80vh;
        object-fit: cover;
    }
`

const Hide = styled.div`
    overflow: hidden;
`

export default HeroSection
