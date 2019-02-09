import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className='container middle'>
        <div className='logo middle '>
          <h1 className='logoIcon'>p</h1>
        </div>

        <div className='header'>
          <p className='description'>Show the world what you have , an they will tell you what they want</p>
          <h1 className='name'>pACT</h1>
          <p className='theme'>Enhance your buiness</p>
          <button  className='login bButton'>Login</button>
        </div>

        <div className='footer'> footer </div>
      </div>
    );
  }
}


export default Landing;
