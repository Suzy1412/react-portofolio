import React from 'react';
import '../../App.css';
import Particles from 'react-particles-js';



export default function Contact() {
  return <h1 className='Contact'>
   
  
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
   <div className='contact-conteiner'>
   <div className='min-connteiner-con'>
              <ul className='ft-social-list'>
                <li>
                  <a href='https://github.com/Suzy1412'><i className='fab fa-github'></i></a>
                </li>
                <li>
                  <a href='mailto:suzy.91@outlook.com'><i className='fas fa-envelope-open-text'></i></a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/suzana-jovanovic-1b9ab81b2/'><i className='fab fa-linkedin'></i></a>
                </li>
              </ul>
            </div>
            </div>
  </h1>;
}