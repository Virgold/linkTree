import React from 'react';
import SlackImg from '../assets/slack.png';
import SocialImg from '../assets/Social icon.png'

function Workplace() {
  return (
    <div className='d-flex flex-row justify-content-center align-items-self gap-3 mt-3 mb-5 py-4'>

    <div className='Slack'>
       <a href="" target="_blank"><img src={SlackImg} alt="" id='slackImg'/> </a>
    </div>

    <div className='Github'>
       <a href="https://github.com/Virgold" target="_blank"><img src={SocialImg} alt="" id='socialImg'/></a>
    </div>
</div>
  )
}

export default Workplace