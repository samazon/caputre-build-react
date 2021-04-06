import React from 'react'
import home2 from '../img/home2.png'
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'

const ServicesSection = () => {
    return (
        <div className="services__block">
            <div className="description">
                <div className="hide">
                    <h2>High</h2>
                </div>
                <div className="hide">
                    <h2><span>Quality</span></h2>
                </div>
                <div className="hide">
                    <h2>Service.</h2>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="clock icon"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="clock icon"/>
                            <h3>Pro Grade Gear</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="clock icon"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="image"/>
            </div>
        </div>
    )
}

export default ServicesSection
