import React from 'react'
import LinkCard from '../components/LinkCard'
import '../App.css';
import Profile from '../components/Profile'

function Tree() {
  return (
    <div className='container'>
        <Profile/>
        <LinkCard/>
    </div>
  )
}

export default Tree