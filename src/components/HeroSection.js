import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/video.mp4" autoPlay loop muted />
      <h1>Suzana Jovanović</h1>
      <p>Web Developer</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primery'
          buttonSize='btn--large'
        >
          Watch Triler <i className='far fa-play-circle' />
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection