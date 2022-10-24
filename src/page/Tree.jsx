import React from 'react'
import LinkCard from '../components/LinkCard'
import '../App.css';
import Profile from '../components/Profile'
import Footer from '../components/Footer';

function Tree() {
  return (
    <div className='container'>
        <Profile/>
        <LinkCard/>
        <Footer/>
    </div>
  )
}

export default Tree