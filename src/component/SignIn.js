import React, { Component } from 'react';
import IconHeader from './IconHeader';
import IconFooter from './IconFooter'
import '../styles/SignIn.css';
import '../styles/General.css';
import '../styles/Media.css'

class SignIn extends Component {
  render() {

    return (
      <div className=' G_container G_middle '>

          <div className =' G_smallLesLogo G_logoDiv SI_iconPosition M_smallLogo '><IconHeader /></div>
          
          <form className='SI_formSize M_formSize G_flex M_flex'>
            <div className='S_info M_info G_middle'>   
              <h1 className='G_SubHeaderLineHeight G_subHeaderFont G_subHeaderFontStyle '>makface is here to help you</h1>
              <ul className='G_smallerFont G_SmallerFontStyle G_textLineHeight'>
                <li>Connect with your sellers</li>
                <li>Connect with your buyers</li>
                <li>Make marketing earsier for you</li>
              </ul>
              <div className='SI_FooterPosition'><IconFooter /></div>
            </div>

            <div class="SignInForm_container M_SignInForm_container">
              <h1 className='G_centerTx G_subHeaderFontStyle'>Sign In</h1>

              <div >
                <label for="uname" className='G_SubHeaderLineHeight G_subHeaderFontStyle G_subHeaderFont'><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" className='G_smallerFont'></input>

                <label for="psw" className='G_SubHeaderLineHeight G_subHeaderFontStyle'><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" className='G_smallerFont'></input>

                <button type="submit"   className='G_longBtn G_Btn G_smallBtn'>Login</button>

                <label className='G_SubHeaderLineHeight '>
                  <input type="checkbox" checked="checked" name="remember" className='checkBox G_smallerFont'></input> Remember me
                </label>
              </div>

               <div class="forgotPasswordDiv ">
                <button type="button" className='G_smallBtn G_Btn'> Cancel </button>
                <span class="forgotPassword G_smallerFont">Forgot <a href="#">password?</a></span>
              </div>
            </div>
          </form> 
      </div>
    );
  }
}


export default SignIn;
