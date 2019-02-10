import React, { Component } from 'react';
import IconHeader from './IconHeader'
import './Style.css';
// import { IoLogoWhatsapp , IoLogoFacebook} from "react-icons/io";
// import { FaTwitterSquare } from "react-icons/fa";

class SignIn extends Component {
  render() {
    return (
      <div className=' container middle'>

        <div >
          <IconHeader />
          
          <form>
            <div class="SignInForm_container middle">
              <h1 className='centerTx'>Sign Up</h1>
              <p className='centerTx'>Please fill in this form to create an account.</p>

              <label for="email"><b>Username</b></label>
              <input type="text" placeholder="Enter Username"name="name" required className='Input'></input>

              <label><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" className='Input' required></input>

              <label for="psw-repeat"><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" name="psw-repeat" className='Input' required></input>

              <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

              <div class="clearfix">
                <button type="button" className='bButton' >Cancel</button>
                <button type="submit" className='bButton'>SignUp</button>
              </div>
              <p>You have an account? <a href='#'>Singin</a></p>
            </div>
          </form> 

        </div>
      </div>
    );
  }
}


export default SignIn;
