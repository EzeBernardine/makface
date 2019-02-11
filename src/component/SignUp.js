import React, { Component } from 'react';
import IconHeader from './IconHeader'
import '../styles/SignUp.css';
import '../styles/General.css';

class SignUp extends Component {
  render() {

    return (
      <div className=' G_container G_middle'>

          <div className ='G_middle G_smallLogo G_logoDiv iconPosition'><IconHeader /></div>
          
          <form className='formSize'>
            <div class="SignUpForm_container middle">
              <h1 className='G_centerTx G_subHeaderFontStyle'>Sign Up</h1>
              <p className=' G_subHeaderFont G_SubHeaderLineHeight G_SmallerFontStyle'>Please fill in this form to create an account.</p>

              <label for="email" className='G_SubHeaderLineHeight G_subHeaderFontStyle'><b>Username</b></label>
              <input type="text" placeholder="Enter Username"name="name" required className='G_smallerFont'></input>

              <label className='G_SubHeaderLineHeight G_subHeaderFontStyle'><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" className='G_smallerFont' required></input>

              <label for="psw-repeat" className='G_SubHeaderLineHeight G_subHeaderFontStyle'><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" name="psw-repeat" className='G_smallerFont' required></input>

              <p className='G_smallerFont G_centerTx G_textLineHeight G_SmallerFontStyle'>By creating an account, you agree to our
                <a href='#'> Terms & Policies</a>
              .</p>

              <div class="btnDiv G_flex G_middle">
                <button type="button" className='G_smallBtn G_Btn' >Cancel</button>
                <button type="submit" className='G_smallBtn G_Btn'>SignUp</button>
              </div>
              <p className='G_smallerFont G_centerTx G_textLineHeight G_SmallerFontStyle'>You have an account? <a href='#'>Singin</a></p>
            </div>
          </form> 

      </div>
    );
  }
}


export default SignUp;
