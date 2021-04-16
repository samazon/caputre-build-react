import React from 'react'
import { StyledAbout } from '../styles'
import styled from 'styled-components';
import Toggle  from './Toggle'
// motion
import { AnimateSharedLayout } from "framer-motion";


const FaqSection = () => {
    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
              <Toggle title="How do I start?">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quidem.</p>
                    </div>
                </div>
              </Toggle>
              <Toggle title="What products do you offer?">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quidem.</p>
                    </div>
                </div>
              </Toggle>
              <Toggle title="Different Payment Methods">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quidem.</p>
                    </div>
                </div>
              </Toggle>
              <Toggle title="Daily Schedule">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quidem.</p>
                    </div>
                </div>
              </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(StyledAbout)`
  padding: 5rem 2rem;
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
