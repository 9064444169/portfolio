import React from 'react'
import './web.css'

function Web() {
    return (
        <div className='web'>
            <div className="web-option">
                <a href="#about">
                    <i className="fi fi-rr-info option-icon"></i>About
                </a>
            </div>
            <div className="web-option">
                <a href="#projects">
                    <i className="fi fi-rr-edit-alt option-icon"></i>Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                    <i class="fi fi-rr-laptop option-icon"></i>Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                <i class="fi fi-rr-portrait option-icon"></i>Contact Me
                </a>
            </div>
        </div>
    );
}

export default Web
