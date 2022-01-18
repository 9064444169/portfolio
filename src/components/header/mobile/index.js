import React from 'react'
import './mobile.css'

function Mobile({isOpen,setIsOpen}) {   /**destructurings we can also use directly props but we are not using it  */
    return (
        <div className='mobile'>
           <div className="close-icon">
                <i className="fi fi-rr-pharmacy" onClick={() => setIsOpen(!isOpen)}></i>
           </div>
            <div className="mobile-options">
            <div className="mobile-option">
                <a href="#about">
                    <i className="fi fi-rr-info option-icon"></i>About
                </a>
            </div>
            <div className="mobile-option">
                <a href="#projects">
                    <i className="fi fi-rr-edit-alt option-icon"></i>Projects
                </a>
            </div>
            <div className="mobile-option">
                <a href="#skills">
                    <i class="fi fi-rr-laptop option-icon"></i>Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact">
                <i class="fi fi-rr-portrait option-icon"></i>Contact Me
                </a>
            </div>
            </div>
           
        </div>
    )
}

export default Mobile
