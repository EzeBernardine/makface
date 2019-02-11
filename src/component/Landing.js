import React, { Component } from 'react';
import  '../styles/Landing.css';
import  '../styles/General.css';
import IconHeader from './IconHeader';
import IconFooter from './IconFooter';

class Landing extends Component {
  render() {
    return (
      <div className='G_container Landing_container '>
      
       <div className ='logo G_middle G_largeLogo G_logoDiv'><IconHeader /></div>

        <div className='header'>
          <p className='description '>Show the world what you have, and learn what they want</p>
          <h1 className='name font-effect-shadow-multiple'>pACT</h1>
          <button className='G_bigBtn G_Btn'>Login</button>
        </div>

        <div className='footer'> 
          <p className='theme '>Enhance your buiness</p>
          <IconFooter />
        </div> 
      </div>
    );
  }
}


export default Landing;
