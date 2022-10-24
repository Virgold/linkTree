import React from 'react';
import Img from '../assets/image1.jpeg';
import logo from '../assets/I4G.png'
import vector from '../assets/Vector.png'

function Footer() {
    return (
        <div className='d-md-flex flex-row justify-content-between align-items-self gap3 mt-3 py-4 d-none'>

            <div className='mainText'>
               Zuri <span><img src={vector} alt="" id='vector'/></span> Internship
            </div>

            <div className=''>
                <p id='subText'>HNG Inernship 9 Frontend Task</p>
            </div>

            <div className=''>
                <img src={logo} alt="" id='logo'/>
            </div>
        </div>
    )
}

export default Footer