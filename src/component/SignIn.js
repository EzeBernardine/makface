import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import IconHeader from './IconHeader';
import IconFooter from './IconFooter';
import Menu from '../component/Menu'
import '../styles/SignIn.css';
import '../styles/General.css';
import '../styles/Media.css'

class SignIn extends Component {
  render() {

    let makface = ['Makface' ]
    let menu = [ 'Create a New Account']

    return (
      <div className=' G_container G_middle '>

          <div className =' G_smallLesLogo G_logoDiv In_Up_iconPosition M_smallLogo '><IconHeader /></div>
          
          <div className='G_Menu G_biggestFont'>
            <Menu  menu = {menu} name = {makface}/>
          </div>

          <form className='SI_formSize M_formSize G_flex M_grid'>
            <div className='info M_info G_middle'>   
              <h1 className='G_SubHeaderLineHeight G_subHeaderFont G_subHeaderFontStyle '>makface is here to help you</h1>
              <ul className='G_smallerFont G_SmallerFontStyle G_textLineHeight'>
                <li>Connect with your sellers</li>
                <li>Connect with your buyers</li>
                <li>Make marketing easier for you</li>
              </ul>
            </div>

            <div class="SignInForm_container M_SignInForm_container">
              <h1 className='G_centerTx G_subHeaderFontStyle G_padContainer'>Sign In</h1>

              <div >
                <label for="uname" className='G_SubHeaderLineHeight G_subHeaderFontStyle G_subHeaderFont M_subHeaderFont'><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" className='G_smallerFont'></input>

                <label for="psw" className='G_SubHeaderLineHeight G_subHeaderFontStyle G_subHeaderFont M_subHeaderFont'><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" className='G_smallerFont'></input>

                

                <NavLink  exact={true} to="/Dashboard" activeClassName="is-active" >
                   <button type="submit" className='G_longBtn G_Btn G_smallBtn  btn'>Login</button> 
                </NavLink>

                <label className='G_SubHeaderLineHeight '>
                  <input type="checkbox" checked="checked" name="remember" className='checkBox G_smallerFont'></input> Remember me
                </label>
              </div>

               <div class="forgotPasswordDiv ">
                <button type="button" className='G_smallBtn G_Btn M_smallBtn'> Cancel </button>
                <span class="forgotPassword G_smallerFont M_smallerFont">Forgot <a href="#">password?</a></span>
              </div>
            </div>
          </form> 


          <div className='FooterPosition'> <IconFooter /></div>
      </div>
    );
  }
}


export default SignIn;
