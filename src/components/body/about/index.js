import React from 'react'
import './about.css'
import Typewriter from 'typewriter-effect';
function About() {
    return (
        <div className='about'>
            <div className="about-top">
               <div className="about-info">
                   Hello I am
                   <span className='info-name'> Ankit</span>
                    <br/>I love <span className="info-ex">exploring</span> things.
                  
                       <div className="type">
                   <Typewriter
                    options={{      
                        autoStart:true,
                        loop:true,
                        delay:40,
                        strings:[
                            "I am Tech Enthusiast", 
                            "I am FrontEnd Developer"
                        ],
                    }} />
                    </div>
                </div>
                   <div className="about-photo">
                       <img src={require('../../../assets/ankit.png')} className='picture' alt="" />
                    </div> 
            </div>
            <div className="about-bottom"></div>
        </div>
    )
}

export default About

