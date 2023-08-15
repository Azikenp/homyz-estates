import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">


            <div className="hero-left">
                <div className="hero-title">
                    <h1>Discover <br /> More Suitable <br /> Property</h1>
                </div>
            </div>
            

            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="hero image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero