import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/General.css';
import '../styles/IconHeader.css';

class IconHeader extends Component { 
  render() {
    return (
      <NavLink exact={true} to="/" className='logo G_middle'>
         <h1 className='G_logoIcon font-effect-3d-float G_SmallerFontStyle G_centerTx'>m</h1> 
      </NavLink>
    );
  }
}

export default IconHeader;
