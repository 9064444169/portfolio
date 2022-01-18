import React, { useState } from 'react'
import './header.css'
import Mobile from './mobile'
import Web from './web'


function Header() {
   const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='header'>
            <div className='logo'>An<span className="info">kit</span> Chh<span className="info">etri</span></div>
            <div className="menu">
                <div className="web-menu">
                   <Web />
                </div>
                <div className="mobile-menu">
                <div onClick={()=>setIsOpen(!isOpen)}>
                <i className="fi fi-rr-align-justify menu-icon"></i>
                </div>
                {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>  
    );
}

export default Header
