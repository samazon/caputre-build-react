import React from 'react'
import { StyledAbout } from '../styles'
import styled from 'styled-components';

const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How do I start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quidem.</p>
                </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>What products do you offer?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quidem.</p>
                </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quidem.</p>
                </div>
            </div>
            <div className="faq-line"></div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quidem.</p>
                </div>
            </div>
            <div className="faq-line"></div>
        </Faq>
    )
}

const Faq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
    color: #23d997;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 4rem;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection
