import React from 'react'
import { Hide, Image, StyledAbout, StyledDescription } from '../styles'
import styled from 'styled-components';
//Import Icons
import home2 from '../img/home2.png'
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
// Scroll Magic
import{ UseScroll } from './UseScroll'
import { scrollReveal } from '../animation'

const ServicesSection = () => {
    const [element, controls] = UseScroll();
    return (
        <StyledServies variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <StyledDescription>
                <Hide>
                <h2>High <span>quality</span> services.</h2>
                </Hide>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="clock icon"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="clock icon"/>
                            <h3>Pro Grade Gear</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="clock icon"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </StyledDescription>
            <Image>
                <img src={home2} alt="section illustration"/>
            </Image>
        </StyledServies>
    )
}
// Component Styles
const StyledServies = styled(StyledAbout)`

  min-height: 90vh;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 2rem;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1500px) {
    display: block;
    padding: 2rem 2rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1500px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
  @media (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default ServicesSection
