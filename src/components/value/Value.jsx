import React from 'react'
import {
     Accordion, 
     AccordionItem, 
     AccordionItemHeading, 
     AccordionItemButton, 
     AccordionItemPanel, 
     AccordionItemState 
    } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'

function Value() {
  return (
    <div className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* left */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="image" />
                </div>
            </div>

            {/* Right side */}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give To You</span>
                <span className='secondaryText'>We are always happy to help by providing the best services for you <br /> We believe a good place to live can make your life better </span>
            </div>
        </div>
    </div>
  )
}

export default Value