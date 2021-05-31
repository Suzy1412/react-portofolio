import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Particles from 'react-particles-js';

function HeroSection() {
  return (
    <div className='hero'>
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 160
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}}
   />
        
      <div className="hero-conteiner">
        
      <div className="min-con">
        
      <h1>
        My name is Suzana,
        <p>I am a Full Stack Web Developer based in Berlin.</p>
     </h1>
    <p className="p-button">PLEASED TO MEET YOU</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        
        </div>
        </div>
        </div>
       

       
      </div>
   
  );
}

export default HeroSection