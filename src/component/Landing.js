import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import  '../styles/Landing.css';
import  '../styles/General.css';
import IconHeader from './IconHeader';
import IconFooter from './IconFooter';
import '../styles/Media.css';

class Landing extends Component {
  render() {
    return (
      <div className='G_container Landing_container G_middle'>
      
       <div className =' G_middle G_largeLogo G_logoDiv LIconPosition  M_L_largeLogo' ><IconHeader /></div>

        <div className='header'>
          <p className='description L_description M_subHeaderFont'>Sample you awesome goods and connect with your buyers<h1 className='on'>on</h1> </p>
          <h1 className='name font-effect-shadow-multiple'>makface</h1>
          <NavLink className='G_bigBtn  G_Btn M_smallBtn' exact={true} to="/SignUp" activeClassName="is-active"> Login </NavLink>
        </div>

        <div className='footer'> 
          <p className='theme M_smallerFont'>Enhance your business</p>
          <IconFooter />
        </div> 
      </div>
    );
  }
}


export default Landing;
