import React from 'react';
import Separator from '../../common/separator';
import './contact.css';
import SocialContact from "../../common/social-contact/index";
function Contact() {
    return (
        <div className='contact'>
            <Separator/>
            <label className='section-title'>Contact</label>
            <div className='contact-container'>
                <div className='contact-left'>
                    <p>Want to get in touch?</p>
                    <SocialContact/>
                </div>
                <div className="download">
                    <a download href={require("../../../assets/resume.pdf")}>
                    <i class="fi fi-rr-download download-icon"></i>
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
