import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import './Hero.css'

function Hero() {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">


            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"></div>
                    <h1>Discover <br /> More Suitable <br /> Property</h1>
                </div>

                <div className="flexColStart hero-des">
                    <span>Find a variety of properties that suit you very easily</span>
                    <span>Forget all difficulties in finding a residence for you</span>
                </div>

                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25} />
                    <input type="text" />
                    <button className='button'>Search</button>
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