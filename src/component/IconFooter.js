import React, { Component } from 'react';
import '../styles/IconFooter.css';
import { IoLogoWhatsapp , IoLogoFacebook} from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";

class IconFooter extends Component {
  render() {
    return (
      <div className='icons'> 
        <span><IoLogoWhatsapp /></span> <span><IoLogoFacebook/></span> 
        <span><FaTwitterSquare /></span> 
      </div>
    );
  }
}


export default IconFooter;
