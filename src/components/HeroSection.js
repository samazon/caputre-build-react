import React from 'react'
import home1 from '../img/home1.png';

const HeroSection = () => {
    return (
        <div className="hero__block">
            <div className="hero__block--heading">
                <div className="description">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span></h2>
                    </div>
                    <div className="hide">
                        <h2>come true</h2>
                    </div>
                </div>
                <p className="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, ut dignissimos sapiente nam eaque porro impedit fugiat. Dolorem repellat, delectus qui hic non, at voluptatem provident nostrum ad placeat quas?</p>
                <button>Contact Us</button>
            </div>
            <div className="hero__block--img">
                <img src={home1} alt="hero img"/>
            </div>
        </div>
    )
}

export default HeroSection
