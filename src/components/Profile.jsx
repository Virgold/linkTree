import React from 'react';
import Img from '../assets/image1.jpeg';
import Icon1 from '../assets/Icon.png';
import Icon2 from '../assets/Icon1.png';

function Profile() {
  return (
    <div className='d-flex flex-column align-items-center gap-3 pt-2 position-relative'>
      <div className='navToggle'><img src={Icon1} alt="" id='nav_img1' /> <img src={Icon2} alt="" id='nav_img2' /> </div>
      <div className='profileImg'>
        <img src={Img} alt="" id='profile__img' />
      </div>
      <div className='d-flex flex-row'>
        <div id='twitter' size="">
          <p>@KngVirgo</p>
        </div>
        <div className="ms-4 d-none" id='slack' size="">
          <p>@SlackName</p>
        </div>
      </div>
    </div>
  )
}

export default Profile