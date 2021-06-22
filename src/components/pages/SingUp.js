import React from 'react';
import '../../App.css';
import Particles from 'react-particles-js';




export default function SingUp() {
    return <h1 className='sing-up'>
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
   <div className="singup-conteiner">
       <div className="min-con">
           <h1>Sing-Up</h1>

       </div>
   </div>
    </h1>;
} 