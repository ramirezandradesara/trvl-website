import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/video/video-2.mp4' autoPlay loop muted></video>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WHAtCH TRAILER <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection