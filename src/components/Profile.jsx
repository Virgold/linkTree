import React from 'react'
import Img from '../assets/image1.jpeg'

function Profile() {
  return (
    <div className='d-flex flex-column align-items-center gap-3 pt-2'>
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