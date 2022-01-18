import React from 'react'
import './footer.css'
function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className='footer'>
            <div>
           Created By <span className="info">AnkitChhetri</span> ⓒ {year}
           </div>
        </div>
    )
}

export default Footer
