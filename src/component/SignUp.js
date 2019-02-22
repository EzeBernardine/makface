import React, { Component } from 'react';
import IconHeader from './IconHeader';
import Menu from '../component/Menu'
import {NavLink} from 'react-router-dom';
import '../styles/SignUp.css';
import '../styles/General.css';
import '../styles/Media.css'

class SignUp extends Component {
  render() {
    let makface = ['Makface' ]
    let menu = ['Log In to an Existing Account']


    return (
      <div className=' G_container G_middle'>

          <div className =' G_smallLesLogo G_logoDiv In_Up_iconPosition M_smallLogo '><IconHeader /></div>
          
          <div className='G_Menu G_biggestFont'>
            <Menu name = {makface} menu = {menu} />
          </div>

          <form className='formSize M_formSize'>
            <div class="SignUpForm_container">
              <h1 className='G_centerTx G_subHeaderFontStyle G_SubHeaderLineHeight G_padContainer'>Sign Up</h1>

              <p className=' G_subHeaderFont M_subHeaderFont  G_SmallerFontStyle'>Please fill in this form to create an account.</p>

              <label for="email" className='G_SubHeaderLineHeight G_subHeaderFontStyle G_subHeaderFont M_subHeaderFont '><b>Username</b></label>
              <input type="text" placeholder="Enter Username"name="name"  className='G_smallerFont input'></input>

              <label className='G_SubHeaderLineHeight G_subHeaderFontStyle G_subHeaderFont M_subHeaderFont '><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" className='G_smallerFont input' ></input>

              <label for="psw-repeat" className='G_SubHeaderLineHeight G_subHeaderFontStyle G_subHeaderFont M_subHeaderFont  '><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" name="psw-repeat" className='G_smallerFont input' ></input>

              <label className=' G_smallerFont G_centerTx  G_SmallerFontStyle M_smallerFont G_textLineHeight' >
                <input type="checkbox" checked="checked" name="remember" className='checkBox G_smallerFont input '></input> By creating an account, you agree to our
                <a href='#'> Terms & Policies</a>
              </label>


              <div class="btnDiv G_flex G_middle">
                <NavLink exact={true} to="/" activeClassName="is-active" type="button" className='G_smallBtn G_Btn M_smallBtn' >Cancel</NavLink>
                <NavLink exact={true} to="/Dashboard" activeClassName="is-active" type="submit" className='G_smallBtn G_Btn M_smallBtn'>Sign Up</NavLink>
              </div>

              <p className='G_smallerFont G_centerTx G_textLineHeight G_SmallerFontStyle M_smallerFont test'>You have an account? 
                <NavLink  exact={true} to="/SignIn" activeClassName="is-active"> Sign In </NavLink>
              </p>
            </div>
          </form> 

      </div>
    );
  }
}


export default SignUp;
