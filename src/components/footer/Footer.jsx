import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src="./logo2.png" width={120} alt="logo" />
                <span className='secondaryText'>
                    Our vision is to give all people <br /> the best place to live for them
                </span>
            </div>

            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>4 odoguyan Spintex may and Hughes </span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer