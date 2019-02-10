import React, { Component } from 'react';
import './Style.css';
import { IoLogoWhatsapp , IoLogoFacebook} from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";

class Landing extends Component {
  render() {
    return (
      <div className='container Landing_container middle'>
        <div className='logoDiv'>
          <div className='logo middle '>
            <h1 className='logoIcon font-effect-3d-float'>p</h1>
          </div>
        </div>

        <div className='header '>
          <p className='description '>Show the world what you have, and learn what they want</p>
          <h1 className='name font-effect-shadow-multiple'>pACT</h1>
          <button  className='login bButton'>Login</button>
        </div>

        <div className='footer'> 
          <p className='theme '>Enhance your buiness</p>
          <div className='icons'> 
            <span><IoLogoWhatsapp /></span> <span><IoLogoFacebook/></span> 
            <span><FaTwitterSquare /></span> 
          </div>
        </div>
      </div>
    );
  }
}


export default Landing;
